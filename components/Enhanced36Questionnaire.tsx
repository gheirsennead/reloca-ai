"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { questions36Enhanced, MANDATORY_QUESTIONS_36, TOTAL_QUESTIONS_36, SECTIONS_36 } from "@/lib/questions-36-enhanced";
import { QuizDisclaimer } from "@/components/LegalDisclaimer";
import type { Answer, Question } from "@/types/questionnaire";
import { analytics } from "@/lib/analytics";

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  const remaining = total - current;
  // ~5 seconds per question on average
  const minutesLeft = Math.max(1, Math.ceil((remaining * 5) / 60));
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Question {current} of {total}</span>
        <div className="flex items-center gap-3">
          <span className="text-[#38b2ac] font-medium">~{minutesLeft} min left</span>
          <span className="font-semibold">{pct}%</span>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#38b2ac] to-[#2c9a94] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ section, isNewSection }: { section: typeof SECTIONS_36[0]; isNewSection: boolean }) {
  if (!isNewSection) return null;
  
  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-[#38b2ac]/10 to-[#2c9a94]/10 rounded-xl border border-[#38b2ac]/20">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-[#38b2ac] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {section.id}
        </div>
        <h2 className="text-xl font-bold text-[#1a365d]">{section.title}</h2>
      </div>
      <p className="text-gray-600 ml-11">{section.description}</p>
    </div>
  );
}

function MidCourseEncouragement({ questionId }: { questionId: number }) {
  const encouragements = {
    9: {
      title: "🎉 Excellent Progress!",
      message: "You've shared your core motivations and goals. Now let's explore the financial side to ensure we recommend realistic and achievable options for your situation."
    },
    14: {
      title: "💪 Halfway There!",
      message: "Great work on the financial details! Now let's dive into your lifestyle preferences. This section helps us match you with places where you'll truly love living."
    },
    23: {
      title: "🚀 Almost Done!",
      message: "Fantastic! You've painted a clear picture of your ideal lifestyle. These final questions cover the practical aspects that make relocations successful."
    },
    31: {
      title: "🏁 Final Stretch!",
      message: "You're doing amazing! Just a few more questions to personalize your recommendations and address any specific concerns you might have."
    }
  };

  const encouragement = encouragements[questionId as keyof typeof encouragements];
  
  if (!encouragement) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200/50 shadow-sm">
      <div className="text-center">
        <h3 className="text-lg font-bold text-green-800 mb-2">{encouragement.title}</h3>
        <p className="text-green-700">{encouragement.message}</p>
      </div>
    </div>
  );
}

function QuestionRenderer({
  question,
  answer,
  onChange,
}: {
  question: Question;
  answer: Answer | undefined;
  onChange: (val: Answer) => void;
}) {
  const baseInputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition";
  
  switch (question.type) {
    case "dropdown":
      return (
        <select
          value={(answer as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInputClass} appearance-none cursor-pointer`}
        >
          <option value="">Please select...</option>
          {question.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );

    case "single-select":
      return (
        <div className="space-y-3">
          {question.options?.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                answer === opt.value
                  ? "border-[#38b2ac] bg-[#38b2ac]/5 shadow-sm"
                  : "border-gray-200 hover:border-[#38b2ac]/50"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={opt.value}
                checked={answer === opt.value}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-all ${
                answer === opt.value
                  ? "border-[#38b2ac] bg-[#38b2ac]"
                  : "border-gray-300"
              }`}>
                {answer === opt.value && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className={`font-medium ${answer === opt.value ? "text-[#38b2ac]" : "text-gray-700"}`}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      );

    case "multi-select":
      const selectedValues = (answer as string[]) || [];
      const maxSel = question.maxSelections;
      return (
        <div className="space-y-3">
          {maxSel && (
            <div className="text-sm text-gray-500 mb-2 font-medium">
              Selected: {selectedValues.length}{maxSel ? ` / ${maxSel} max` : ''}
            </div>
          )}
          {question.options?.map((opt) => {
            const isSelected = selectedValues.includes(opt.value);
            const isDisabled = !isSelected && maxSel ? selectedValues.length >= maxSel : false;
            return (
              <label
                key={opt.value}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                  isSelected
                    ? "border-[#38b2ac] bg-[#38b2ac]/5 shadow-sm"
                    : isDisabled
                    ? "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                    : "border-gray-200 hover:border-[#38b2ac]/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={(e) => {
                    const newSelection = e.target.checked
                      ? [...selectedValues, opt.value]
                      : selectedValues.filter((v) => v !== opt.value);
                    onChange(newSelection);
                  }}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-all ${
                  isSelected
                    ? "border-[#38b2ac] bg-[#38b2ac]"
                    : "border-gray-300"
                }`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`font-medium ${isSelected ? "text-[#38b2ac]" : "text-gray-700"}`}>
                  {opt.label}
                </span>
              </label>
            );
          })}
          {/* Text input for "Other" option */}
          {question.hasOtherOption && selectedValues.includes('other') && (
            <input
              type="text"
              placeholder="Please specify..."
              className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition"
              onChange={(e) => {
                const filtered = selectedValues.filter(v => v !== 'other' && !v.startsWith('other:'));
                onChange([...filtered, 'other', ...(e.target.value ? [`other:${e.target.value}`] : [])]);
              }}
            />
          )}
        </div>
      );

    case "ranking":
      const rankedValues = (answer as string[]) || [];
      const maxRank = question.maxSelections || 3;
      const rankLabels = ['#1', '#2', '#3', '#4', '#5'];
      return (
        <div className="space-y-3">
          {/* Show current ranking */}
          {rankedValues.length > 0 && (
            <div className="mb-4 p-4 bg-[#38b2ac]/5 rounded-xl border border-[#38b2ac]/20">
              <div className="text-sm font-semibold text-[#38b2ac] mb-2">Your ranking:</div>
              {rankedValues.map((val, idx) => {
                const opt = question.options?.find(o => o.value === val);
                return (
                  <div key={val} className="flex items-center justify-between py-1">
                    <span className="text-sm">
                      <span className="font-bold text-[#38b2ac]">{rankLabels[idx]}</span> {opt?.label || val}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onChange(rankedValues.filter(v => v !== val));
                      }}
                      className="text-red-400 hover:text-red-600 text-xs ml-2"
                    >
                      ✕ Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <div className="text-sm text-gray-500 mb-2 font-medium">
            {rankedValues.length === 0
              ? `Click to select your ${rankLabels[0]} choice`
              : rankedValues.length < maxRank
              ? `Click to select your ${rankLabels[rankedValues.length]} choice (${rankedValues.length}/${maxRank})`
              : `All ${maxRank} choices selected ✓`}
          </div>
          {question.options?.map((opt) => {
            const rankIndex = rankedValues.indexOf(opt.value);
            const isRanked = rankIndex !== -1;
            const isDisabled = !isRanked && rankedValues.length >= maxRank;
            return (
              <button
                key={opt.value}
                type="button"
                disabled={isDisabled}
                onClick={() => {
                  if (isRanked) {
                    onChange(rankedValues.filter(v => v !== opt.value));
                  } else if (rankedValues.length < maxRank) {
                    onChange([...rankedValues, opt.value]);
                  }
                }}
                className={`flex items-center w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                  isRanked
                    ? "border-[#38b2ac] bg-[#38b2ac]/5 shadow-sm"
                    : isDisabled
                    ? "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                    : "border-gray-200 hover:border-[#38b2ac]/50"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold ${
                  isRanked
                    ? "bg-[#38b2ac] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}>
                  {isRanked ? rankLabels[rankIndex] : '—'}
                </div>
                <span className={`font-medium ${isRanked ? "text-[#38b2ac]" : "text-gray-700"}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      );

    case "textarea":
      return (
        <textarea
          value={(answer as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          rows={4}
          className={`${baseInputClass} resize-none`}
        />
      );

    default:
      return (
        <input
          type="text"
          value={(answer as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
          placeholder="Type your answer..."
        />
      );
  }
}

function EarlyEmailCapture({ email, onEmailChange, onDismiss }: { email: string; onEmailChange: (e: string) => void; onDismiss: () => void }) {
  return (
    <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-[#1a365d] text-sm mb-1">💾 Save your progress?</h4>
          <p className="text-xs text-gray-500 mb-3">Enter your email so we can recover your answers if you need to come back later.</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40"
            />
            <button onClick={onDismiss} className="text-xs text-gray-400 hover:text-gray-600 px-2">Skip</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const QUIZ_STORAGE_KEY = 'reloca_quiz_progress';
const QUIZ_STORAGE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface SavedQuizProgress {
  currentQuestion: number;
  answers: Record<number, Answer>;
  skippedQuestions: number[];
  savedAt: number;
}

function loadSavedProgress(): SavedQuizProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return null;
    const data: SavedQuizProgress = JSON.parse(raw);
    if (Date.now() - data.savedAt > QUIZ_STORAGE_TTL_MS) {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function clearSavedProgress() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  }
}

export default function Enhanced36Questionnaire() {
  const [showIntro, setShowIntro] = useState(true);
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [skippedQuestions, setSkippedQuestions] = useState<Set<number>>(new Set());
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [earlyEmailDismissed, setEarlyEmailDismissed] = useState(false);

  const question = questions36Enhanced[currentQuestion];
  const answer = answers[question.id];
  const isNewSection = currentQuestion === 0 || questions36Enhanced[currentQuestion].section !== questions36Enhanced[currentQuestion - 1].section;
  const currentSection = SECTIONS_36.find(s => s.id === question.section);

  // Check for saved progress on mount
  useEffect(() => {
    const saved = loadSavedProgress();
    if (saved && saved.currentQuestion > 0) {
      setShowResumePrompt(true);
    }
  }, []);

  // Track quiz start
  useEffect(() => {
    analytics.trackQuizStart();
  }, []);

  // Track progress
  useEffect(() => {
    if (currentQuestion > 0) {
      analytics.trackQuizProgress(currentQuestion + 1, TOTAL_QUESTIONS_36, {
        question_id: question.id,
        section: question.section
      });
    }
  }, [currentQuestion, question.id, question.section]);

  // Save progress to localStorage after every answer change
  useEffect(() => {
    if (!showIntro && !showEmailCapture && currentQuestion > 0) {
      try {
        const progress: SavedQuizProgress = {
          currentQuestion,
          answers,
          skippedQuestions: Array.from(skippedQuestions),
          savedAt: Date.now(),
        };
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(progress));
      } catch {
        // localStorage may be unavailable — fail silently
      }
    }
  }, [currentQuestion, answers, skippedQuestions, showIntro, showEmailCapture]);

  const canProceed = useMemo(() => {
    if (!question.mandatory) return true;
    if (question.type === "multi-select" || question.type === "ranking") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return answer !== undefined && answer !== "";
  }, [question.mandatory, question.type, answer]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions36Enhanced.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowEmailCapture(true);
    }
  }, [currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  const handleSkip = useCallback(() => {
    if (!question.mandatory) {
      setSkippedQuestions(prev => new Set([...prev, question.id]));
      handleNext();
    }
  }, [question.mandatory, question.id, handleNext]);

  const handleSubmit = useCallback(async () => {
    if (!email) return;

    setIsSubmitting(true);
    analytics.trackQuizComplete(answers, Date.now());

    try {
      const response = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          firstName: firstName.trim(),
          answers,
          skipped: Array.from(skippedQuestions),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        analytics.trackFeatureUsage('questionnaire', 'completion', {
          user_id: data.userId,
          total_questions: TOTAL_QUESTIONS_36,
          answered_questions: Object.keys(answers).length,
          skipped_questions: skippedQuestions.size
        });
        
        // Clear saved progress on successful submission
        clearSavedProgress();

        // Redirect to report/payment page
        window.location.href = `/report/${data.reportId}`;
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your answers. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [email, firstName, answers, skippedQuestions]);

  // Resume prompt — shown when saved progress is detected
  if (showResumePrompt) {
    const saved = loadSavedProgress();
    const savedQuestion = saved?.currentQuestion ?? 0;
    const savedPct = Math.round(((savedQuestion + 1) / TOTAL_QUESTIONS_36) * 100);

    const handleResume = () => {
      if (saved) {
        setCurrentQuestion(saved.currentQuestion);
        setAnswers(saved.answers);
        setSkippedQuestions(new Set(saved.skippedQuestions));
      }
      setShowIntro(false);
      setShowResumePrompt(false);
    };

    const handleStartFresh = () => {
      clearSavedProgress();
      setShowResumePrompt(false);
      setShowIntro(true);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
          <Link href="/" className="inline-block mb-6">
            <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-12 w-auto mx-auto" />
          </Link>
          <div className="w-16 h-16 bg-[#38b2ac]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👋</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1a365d] mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-6">You made it to question {savedQuestion + 1} of {TOTAL_QUESTIONS_36}. Want to pick up where you left off?</p>

          {/* Progress preview */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Progress saved</span>
              <span className="font-semibold text-[#38b2ac]">{savedPct}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#38b2ac] to-[#2c9a94] rounded-full"
                style={{ width: `${savedPct}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleResume}
              className="w-full py-4 bg-gradient-to-r from-[#38b2ac] to-[#319795] text-white font-bold rounded-xl hover:shadow-lg shadow-lg shadow-[#38b2ac]/25 transition-all text-lg"
            >
              Continue where I left off →
            </button>
            <button
              onClick={handleStartFresh}
              className="w-full py-3 text-gray-500 hover:text-[#1a365d] text-sm transition"
            >
              Start fresh instead
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#38b2ac] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-2">Your Personalized Report Is Ready to Be Built</h2>
            <p className="text-gray-600 mb-4">Based on your answers, our AI has identified key insights about your ideal relocation — but the full picture is inside your report.</p>
          </div>

          {/* Report benefits */}
          <div className="bg-gradient-to-br from-[#38b2ac]/5 to-[#1a365d]/5 rounded-xl p-5 mb-6 text-left">
            <p className="font-semibold text-[#1a365d] mb-3">🗺️ What your Full Report includes:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start"><span className="mr-2">•</span>Your top 3 country matches with detailed scoring</li>
              <li className="flex items-start"><span className="mr-2">•</span>Step-by-step visa & residency roadmap for each</li>
              <li className="flex items-start"><span className="mr-2">•</span>Personalized tax optimization strategy (potential savings: $10K–$100K+/year)</li>
              <li className="flex items-start"><span className="mr-2">•</span>Cost of living comparison vs. your current situation</li>
              <li className="flex items-start"><span className="mr-2">•</span>Healthcare, education & safety analysis for your profile</li>
              <li className="flex items-start"><span className="mr-2">•</span>Timeline and actionable checklist to make it happen</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">⚡ Built live using our proprietary data + real expat families feedback + your answers + verified official and professional sources.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac]"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-400">*</span></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac]"
                placeholder="your@email.com"
              />
              {!email && <p className="text-xs text-gray-400 mt-1">Required to receive your report</p>}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!email || isSubmitting}
              className="w-full bg-gradient-to-r from-[#38b2ac] to-[#319795] hover:from-[#2c9a94] hover:to-[#28908a] text-white font-bold py-4 px-6 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? "Generating Your Report..." : "Get My Relocation Report →"}
            </button>
            {/* Money-back guarantee badge */}
            <div className="flex items-center justify-center gap-2 mt-3 bg-green-50 rounded-lg px-3 py-2">
              <span className="text-base">🛡️</span>
              <p className="text-xs text-green-700 font-medium">30-day money-back guarantee — no questions asked</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
          <Link href="/" className="inline-block mb-6">
            <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-12 w-auto mx-auto" />
          </Link>

          <h1 className="text-3xl font-bold text-[#1a365d] mb-4">Your Relocation Starts Here</h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            In the next few minutes, you{"'"}ll answer questions that shape a report no generic guide can match.
          </p>

          <div className="text-left space-y-4 mb-8">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-xl">🔒</span>
              <div>
                <p className="font-semibold text-[#1a365d] text-sm">Your data stays yours.</p>
                <p className="text-xs text-gray-500">We don{"'"}t store personal information or share it with third parties. Your answers are used once — to build your report — then discarded.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-xl">📋</span>
              <div>
                <p className="font-semibold text-[#1a365d] text-sm">Every question is optional</p>
                <p className="text-xs text-gray-500">But the more you share, the sharper your report becomes. Our AI cross-references your answers with proprietary country data, verified government sources, and real-world insights from families who{"'"}ve already made the move.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-xl">💎</span>
              <div>
                <p className="font-semibold text-[#1a365d] text-sm">What you{"'"}ll get</p>
                <p className="text-xs text-gray-500">A professional, personalized relocation plan covering visa pathways, tax optimization, cost of living, healthcare, education, and lifestyle — tailored to your situation. A strategic roadmap you can actually act on.</p>
              </div>
            </div>
          </div>

          {/* Progress preview — shows what the quiz looks like */}
          <div className="mb-5 px-1">
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>36 questions · ~10 min</span>
              <span>0%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-[#38b2ac] to-[#2c9a94] rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Your profile</span>
              <span>Finances</span>
              <span>Lifestyle</span>
              <span>Practical</span>
              <span>Goals</span>
            </div>
          </div>

          {/* Social proof + urgency */}
          <div className="flex items-center justify-center gap-3 mb-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <strong>47 people</strong> took this quiz today
            </span>
            <span>·</span>
            <span>⏱️ ~10 min</span>
          </div>

          <button
            onClick={() => setShowIntro(false)}
            className="w-full py-4 bg-gradient-to-r from-[#38b2ac] to-[#319795] text-white font-bold rounded-xl hover:shadow-lg shadow-lg shadow-[#38b2ac]/25 transition-all text-lg hover:scale-[1.02]"
          >
            Start My Free Assessment →
          </button>

          <p className="text-xs text-gray-400 mt-2">Free quiz. No credit card. Instant results.</p>

          <QuizDisclaimer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafaf9] to-[#f5f5f4]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center">
              <img src="/images/reloca-logo.png" alt="Reloca.ai" className="h-10 w-auto" />
            </Link>
            <div className="text-sm text-gray-500">
              Section {question.section} of 5
            </div>
          </div>
          <ProgressBar current={currentQuestion + 1} total={TOTAL_QUESTIONS_36} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8 pb-24 sm:pb-8">
        {/* Section Header */}
        {currentSection && (
          <SectionHeader section={currentSection} isNewSection={isNewSection} />
        )}

        {/* Mid-course Encouragement */}
        <MidCourseEncouragement questionId={question.id} />

        {/* Early email capture at question 9 */}
        {currentQuestion === 9 && !earlyEmailDismissed && !email && (
          <EarlyEmailCapture
            email={email}
            onEmailChange={setEmail}
            onDismiss={() => setEarlyEmailDismissed(true)}
          />
        )}

        {/* Question Card — mobile-optimized */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2 sm:mb-3 leading-relaxed">
              {question.question}
            </h1>
            {question.description && (
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{question.description}</p>
            )}
          </div>

          <QuestionRenderer
            question={question}
            answer={answer}
            onChange={(newAnswer) => {
              setAnswers(prev => ({ ...prev, [question.id]: newAnswer }));
            }}
          />
        </div>

        {/* Navigation — mobile-optimized with larger touch targets */}
        <div className="fixed bottom-0 left-0 right-0 sm:relative bg-white/95 backdrop-blur-md sm:bg-transparent border-t border-gray-100 sm:border-0 p-3 sm:p-0 flex items-center justify-between z-40">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 sm:px-6 py-3 text-gray-600 hover:text-[#1a365d] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex items-center gap-3">
            {!question.mandatory && (
              <button
                onClick={handleSkip}
                className="px-6 py-3 text-gray-500 hover:text-gray-700 transition font-medium"
              >
                Skip
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2 bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-bold px-8 py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions36Enhanced.length - 1 ? "Complete" : "Next"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}