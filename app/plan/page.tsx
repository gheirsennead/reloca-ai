"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { questions, MANDATORY_QUESTIONS, TOTAL_QUESTIONS, SECTIONS } from "@/lib/questions";
import type { Answer, Question } from "@/types/questionnaire";
import { analytics } from "@/lib/analytics";

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#38b2ac] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function SectionBadge({ title }: { title: string }) {
  return (
    <div className="text-xs font-semibold text-[#38b2ac] uppercase tracking-wider mb-2">
      {title}
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
  switch (question.type) {
    case "dropdown":
      return (
        <select
          value={(answer as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition appearance-none"
        >
          <option value="">Select...</option>
          {question.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );

    case "select":
      return (
        <div className="grid gap-2">
          {question.options?.map((o) => {
            const selected = answer === o.value;
            return (
              <button
                key={o.value}
                onClick={() => onChange(o.value)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition text-sm font-medium ${
                  selected
                    ? "bg-[#38b2ac] text-white border-[#38b2ac]"
                    : "bg-white text-[#1a365d] border-gray-200 hover:border-[#38b2ac]/40"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      );

    case "multi-select": {
      const selected = (answer as string[]) || [];
      return (
        <div className="grid gap-2">
          {question.options?.map((o) => {
            const isSelected = selected.includes(o.value);
            return (
              <button
                key={o.value}
                onClick={() =>
                  onChange(
                    isSelected
                      ? selected.filter((v) => v !== o.value)
                      : [...selected, o.value]
                  )
                }
                className={`w-full text-left px-4 py-3 rounded-xl border transition text-sm font-medium ${
                  isSelected
                    ? "bg-[#38b2ac] text-white border-[#38b2ac]"
                    : "bg-white text-[#1a365d] border-gray-200 hover:border-[#38b2ac]/40"
                }`}
              >
                <span className="mr-2">{isSelected ? "✓" : "○"}</span>
                {o.label}
              </button>
            );
          })}
        </div>
      );
    }

    case "scale": {
      const val = (answer as number) || 0;
      return (
        <div className="flex gap-3 justify-center">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={`w-14 h-14 rounded-xl border text-lg font-semibold transition ${
                val === n
                  ? "bg-[#38b2ac] text-white border-[#38b2ac]"
                  : "bg-white text-[#1a365d] border-gray-200 hover:border-[#38b2ac]/40"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      );
    }

    case "sliders": {
      const values = (answer as Record<string, number>) || {};
      return (
        <div className="space-y-4">
          {question.sliders?.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{s.label}</span>
                <span className="font-semibold text-[#38b2ac]">{values[s.label] || 3}</span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                value={values[s.label] || 3}
                onChange={(e) =>
                  onChange({ ...values, [s.label]: parseInt(e.target.value) })
                }
                className="w-full accent-[#38b2ac]"
              />
            </div>
          ))}
        </div>
      );
    }

    case "text":
      return (
        <textarea
          value={(answer as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          maxLength={question.maxLength}
          rows={3}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition resize-none"
        />
      );

    default:
      return null;
  }
}

export default function PlanPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [skipped, setSkipped] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Track questionnaire start
  useEffect(() => {
    analytics.trackFeatureUsage('questionnaire', 'start');
  }, []);

  // Filter out conditional questions that shouldn't show
  const visibleQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (!q.conditionalOn) return true;
      const depAnswer = answers[q.conditionalOn.questionId];
      return depAnswer === q.conditionalOn.value;
    });
  }, [answers]);

  const currentQ = visibleQuestions[currentIndex];
  const isLast = currentIndex === visibleQuestions.length - 1;
  const isMandatory = currentQ ? MANDATORY_QUESTIONS.includes(currentQ.id) : false;
  const hasAnswer = currentQ ? answers[currentQ.id] !== undefined && answers[currentQ.id] !== "" : false;

  const handleAnswer = useCallback((val: Answer) => {
    if (!currentQ) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: val }));
    
    // Track question answer
    analytics.trackFeatureUsage('questionnaire', 'answer', {
      questionId: currentQ.id,
      questionText: currentQ.question,
      section: currentQ.section,
      isMandatory: MANDATORY_QUESTIONS.includes(currentQ.id)
    });
    
    // Track country interests
    if (typeof val === 'string') {
      const countries = ['Argentina', 'Brazil', 'Uruguay', 'Paraguay', 'Mexico', 'Panama', 'Chile'];
      const matchedCountry = countries.find(country => val.includes(country));
      if (matchedCountry) {
        analytics.trackCountryInterest(matchedCountry, 'questionnaire');
      }
    }
  }, [currentQ]);

  const goNext = useCallback(() => {
    if (isLast) {
      setCompleted(true);
      analytics.trackFeatureUsage('questionnaire', 'reach_completion_screen');
      return;
    }
    setCurrentIndex((i) => Math.min(i + 1, visibleQuestions.length - 1));
    
    // Track progress milestones
    const nextIndex = Math.min(currentIndex + 1, visibleQuestions.length - 1);
    const progress = Math.round(((nextIndex + 1) / visibleQuestions.length) * 100);
    if ([25, 50, 75].includes(progress)) {
      analytics.trackFeatureUsage('questionnaire', 'progress_milestone', { progress });
    }
  }, [isLast, visibleQuestions.length, currentIndex]);

  const goBack = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const handleSkip = useCallback(() => {
    if (!currentQ) return;
    setSkipped((prev) => [...prev, currentQ.id]);
    goNext();
  }, [currentQ, goNext]);

  // Current section info
  const currentSection = currentQ
    ? SECTIONS.find((s) => s.id === currentQ.section)
    : null;

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setSubmitting(true);
    
    // Track questionnaire completion
    analytics.trackFeatureUsage('questionnaire', 'complete', {
      totalAnswered: Object.keys(answers).length,
      totalSkipped: skipped.length,
      completionRate: Math.round((Object.keys(answers).length / visibleQuestions.length) * 100)
    });
    
    try {
      // Save questionnaire + get report ID (fast — no AI generation yet)
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, answers, skipped }),
      });
      const data = await res.json();
      if (data.reportId) {
        // Track lead generation
        analytics.trackFeatureUsage('lead_generated', 'free_report');
        if (data.userId) {
          analytics.setUserId(data.userId);
        }
        
        // Store answers in sessionStorage so report page can trigger generation
        sessionStorage.setItem('reloca_answers', JSON.stringify(answers));
        sessionStorage.setItem('reloca_userId', data.userId);
        window.location.href = `/report/${data.reportId}`;
      } else {
        setEmailError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setEmailError("Connection error. Please try again.");
      setSubmitting(false);
    }
  };

  if (completed) {
    const answeredCount = Object.keys(answers).length;
    const skippedCount = skipped.length;
    return (
      <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-6">🎉</div>
          <h1 className="text-2xl font-bold text-[#1a365d] mb-3">
            Almost There!
          </h1>
          <p className="text-gray-500 mb-2">
            You answered {answeredCount} questions{skippedCount > 0 ? ` and skipped ${skippedCount}` : ""}.
          </p>
          {skippedCount > 0 && (
            <button
              onClick={() => {
                setCompleted(false);
                const firstSkipped = visibleQuestions.findIndex((q) =>
                  skipped.includes(q.id)
                );
                if (firstSkipped >= 0) setCurrentIndex(firstSkipped);
              }}
              className="text-sm text-[#38b2ac] hover:underline mb-6 block mx-auto"
            >
              Go back and answer skipped questions for a more accurate report?
            </button>
          )}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <p className="text-sm font-medium text-[#1a365d] mb-1">
              Enter your email to see your results
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Required to generate your personalized relocation plan.
            </p>
            <input
              type="text"
              placeholder="First name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 bg-[#fafaf9] border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition mb-3"
            />
            <input
              type="email"
              placeholder="your@email.com *"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              className={`w-full px-4 py-3 bg-[#fafaf9] border rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition mb-1 ${emailError ? "border-red-400" : "border-gray-200"}`}
            />
            {emailError && (
              <p className="text-xs text-red-500 mb-2 text-left">{emailError}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-[#38b2ac] hover:bg-[#2c9a94] text-white font-semibold py-3 rounded-xl transition mt-3 disabled:opacity-60"
            >
              {submitting ? "Generating your plan..." : "Show My Results →"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            We don&apos;t sell your data. Your answers are used only to generate your report.
          </p>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/reloca-logo.png" 
              alt="Reloca.ai" 
              className="h-13 w-auto"
            />
          </Link>
          <span className="text-xs text-gray-400">
            Your Relocation Profile
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="px-4 pt-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={currentIndex + 1} total={TOTAL_QUESTIONS} />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full">
          <SectionBadge title={currentQ.sectionTitle} />
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-1">
            {currentQ.question}
          </h2>
          <div className="flex items-center gap-2 mb-6">
            {isMandatory ? (
              <span className="text-xs bg-[#1a365d] text-white px-2 py-0.5 rounded-full">
                Required
              </span>
            ) : (
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                Recommended
              </span>
            )}
          </div>

          <QuestionRenderer
            question={currentQ}
            answer={answers[currentQ.id]}
            onChange={handleAnswer}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 pb-8">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
          <button
            onClick={goBack}
            disabled={currentIndex === 0}
            className="px-5 py-3 text-sm font-medium text-gray-400 hover:text-[#1a365d] transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          <div className="flex gap-2">
            {!isMandatory && (
              <button
                onClick={handleSkip}
                className="px-5 py-3 text-sm font-medium text-gray-400 hover:text-gray-600 transition"
              >
                Skip
              </button>
            )}
            <button
              onClick={goNext}
              disabled={isMandatory && !hasAnswer}
              className="px-6 py-3 bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-sm font-semibold rounded-xl transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isLast ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
