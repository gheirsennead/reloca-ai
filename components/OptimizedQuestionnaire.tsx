"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { questionsOptimized, questionsVariantB, MANDATORY_QUESTIONS_OPTIMIZED, TOTAL_QUESTIONS_OPTIMIZED, SECTIONS_OPTIMIZED, VALUE_HOOKS } from "@/lib/questions-optimized";
import { questionsBalanced, MANDATORY_QUESTIONS_BALANCED, SECTIONS_BALANCED, VALUE_HOOKS_BALANCED } from "@/lib/questions-balanced";
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

function ValueHook({ hookData, onContinue }: { hookData: any; onContinue: () => void }) {
  useEffect(() => {
    analytics.trackValueHookView(hookData.type, 0); // Question ID would be passed from parent
  }, [hookData]);

  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 my-6 border border-teal-100">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{hookData.title}</h3>
        <p className="text-gray-600 mb-4">{hookData.content}</p>
        <button
          onClick={onContinue}
          className="bg-[#38b2ac] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#319795] transition"
        >
          Continue to see results! →
        </button>
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

export default function OptimizedQuestionnaire({ variant = 'A' }: { variant?: 'A' | 'B' | 'balanced' }) {
  // Variant selection
  const questions = variant === 'B' ? questionsVariantB : 
                   variant === 'balanced' ? questionsBalanced : 
                   questionsOptimized;
  
  const mandatoryQuestions = variant === 'balanced' ? MANDATORY_QUESTIONS_BALANCED : MANDATORY_QUESTIONS_OPTIMIZED;
  const sections = variant === 'balanced' ? SECTIONS_BALANCED : SECTIONS_OPTIMIZED;
  const valueHooks = variant === 'balanced' ? VALUE_HOOKS_BALANCED : VALUE_HOOKS;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [skipped, setSkipped] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showValueHook, setShowValueHook] = useState(false);
  const [currentValueHook, setCurrentValueHook] = useState<any>(null);
  
  // Timing tracking
  const questionStartTime = useRef<number>(Date.now());
  const sessionStartTime = useRef<number>(Date.now());
  const [timeSpentOnQuestions, setTimeSpentOnQuestions] = useState<Record<number, number>>({});

  // Track questionnaire start with variant
  useEffect(() => {
    analytics.trackQuestionnaireStart(variant);
    sessionStartTime.current = Date.now();
    questionStartTime.current = Date.now();
  }, [variant]);

  // Filter out conditional questions
  const visibleQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (!q.conditionalOn) return true;
      const depAnswer = answers[q.conditionalOn.questionId];
      return depAnswer === q.conditionalOn.value;
    });
  }, [answers, questions]);

  const currentQ = visibleQuestions[currentIndex];
  const isLast = currentIndex === visibleQuestions.length - 1;
  const isMandatory = currentQ ? mandatoryQuestions.includes(currentQ.id) : false;
  const hasAnswer = currentQ ? answers[currentQ.id] !== undefined && answers[currentQ.id] !== "" : false;

  // Track question view
  useEffect(() => {
    if (currentQ) {
      const timeOnPrevious = timeSpentOnQuestions[currentIndex - 1];
      analytics.trackQuestionView(currentQ.id, currentQ.question, currentQ.section, timeOnPrevious);
      questionStartTime.current = Date.now();
    }
  }, [currentIndex, currentQ]);

  const handleAnswer = useCallback((val: Answer) => {
    if (!currentQ) return;
    
    const timeSpent = Date.now() - questionStartTime.current;
    setTimeSpentOnQuestions(prev => ({ ...prev, [currentIndex]: timeSpent }));
    
    setAnswers((prev) => ({ ...prev, [currentQ.id]: val }));
    
    // Track question answer with timing
    analytics.trackQuestionAnswer(currentQ.id, currentQ.question, val, timeSpent, currentQ.section);
    
    // Track country interests
    if (typeof val === 'string') {
      const countries = ['Argentina', 'Brazil', 'Uruguay', 'Paraguay', 'Mexico', 'Panama', 'Chile'];
      const matchedCountry = countries.find(country => val.includes(country));
      if (matchedCountry) {
        analytics.trackCountryInterest(matchedCountry, 'questionnaire_optimized');
      }
    }
  }, [currentQ, currentIndex]);

  const checkForValueHook = useCallback((questionId: number) => {
    // Different hook points for different variants
    if (variant === 'balanced') {
      const balancedHooks = valueHooks as any;
      if (questionId === 8 && balancedHooks.after_question_8) {
        setCurrentValueHook(balancedHooks.after_question_8);
        setShowValueHook(true);
        return true;
      }
      if (questionId === 12 && balancedHooks.after_question_12) {
        setCurrentValueHook(balancedHooks.after_question_12);
        setShowValueHook(true);
        return true;
      }
    } else {
      // Original optimized version
      const optimizedHooks = valueHooks as any;
      if (questionId === 5 && optimizedHooks.after_question_5) {
        setCurrentValueHook(optimizedHooks.after_question_5);
        setShowValueHook(true);
        return true;
      }
      if (questionId === 7 && optimizedHooks.after_question_7) {
        setCurrentValueHook(optimizedHooks.after_question_7);
        setShowValueHook(true);
        return true;
      }
    }
    return false;
  }, [variant, valueHooks]);

  const goNext = useCallback(() => {
    if (isLast) {
      setCompleted(true);
      analytics.trackFeatureUsage('questionnaire', 'reach_completion_screen');
      return;
    }
    
    // Check for value hook before moving to next question
    if (currentQ && checkForValueHook(currentQ.id)) {
      return; // Stay on current question, show value hook
    }
    
    const nextIndex = Math.min(currentIndex + 1, visibleQuestions.length - 1);
    setCurrentIndex(nextIndex);
    
    // Track progress milestones
    const progress = Math.round(((nextIndex + 1) / visibleQuestions.length) * 100);
    if ([25, 50, 75].includes(progress)) {
      analytics.trackFeatureUsage('questionnaire', 'progress_milestone', { progress, variant });
    }
    
    // Track section completion
    if (currentQ && nextIndex < visibleQuestions.length) {
      const nextQ = visibleQuestions[nextIndex];
      if (currentQ.section !== nextQ.section) {
        const sectionQuestions = visibleQuestions.filter(q => q.section === currentQ.section);
        const answered = sectionQuestions.filter(q => answers[q.id] !== undefined).length;
        const skippedInSection = sectionQuestions.filter(q => skipped.includes(q.id)).length;
        const sectionTime = Object.values(timeSpentOnQuestions).reduce((sum, time) => sum + time, 0);
        
        analytics.trackSectionComplete(currentQ.section, answered, skippedInSection, sectionTime);
      }
    }
  }, [isLast, currentIndex, visibleQuestions, currentQ, checkForValueHook, answers, skipped, timeSpentOnQuestions]);

  const goBack = useCallback(() => {
    if (showValueHook) {
      setShowValueHook(false);
      return;
    }
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, [showValueHook]);

  const handleSkip = useCallback(() => {
    if (!currentQ) return;
    
    const timeSpent = Date.now() - questionStartTime.current;
    setTimeSpentOnQuestions(prev => ({ ...prev, [currentIndex]: timeSpent }));
    
    setSkipped((prev) => [...prev, currentQ.id]);
    analytics.trackQuestionSkip(currentQ.id, currentQ.question, currentQ.section, timeSpent);
    
    goNext();
  }, [currentQ, currentIndex, goNext]);

  const continueAfterValueHook = useCallback(() => {
    setShowValueHook(false);
    const nextIndex = Math.min(currentIndex + 1, visibleQuestions.length - 1);
    setCurrentIndex(nextIndex);
  }, [currentIndex, visibleQuestions.length]);

  // Track abandonment on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentQ && !completed) {
        const totalTime = Date.now() - sessionStartTime.current;
        const progress = Math.round(((currentIndex + 1) / visibleQuestions.length) * 100);
        analytics.trackQuestionnaireAbandon(currentQ.id, currentQ.section, progress, totalTime);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentQ, completed, currentIndex, visibleQuestions.length]);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setSubmitting(true);
    
    const totalTime = Date.now() - sessionStartTime.current;
    
    // Track questionnaire completion
    analytics.trackFeatureUsage('questionnaire', 'complete', {
      variant,
      totalAnswered: Object.keys(answers).length,
      totalSkipped: skipped.length,
      completionRate: Math.round((Object.keys(answers).length / visibleQuestions.length) * 100),
      totalTimeSeconds: Math.round(totalTime / 1000)
    });
    
    try {
      // Include variant in submission
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          firstName, 
          answers, 
          skipped, 
          variant,
          totalTimeSpent: totalTime 
        }),
      });
      
      const data = await res.json();
      if (data.reportId) {
        analytics.trackConversion('report_purchase', 0);
        if (data.userId) {
          analytics.setUserId(data.userId);
        }
        
        sessionStorage.setItem('reloca_answers', JSON.stringify(answers));
        sessionStorage.setItem('reloca_userId', data.userId);
        sessionStorage.setItem('reloca_variant', variant);
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

  // Current section info
  const currentSection = currentQ ? sections.find((s) => s.id === currentQ.section) : null;

  if (showValueHook && currentValueHook) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <ProgressBar current={currentIndex + 1} total={visibleQuestions.length} />
          <ValueHook 
            hookData={currentValueHook} 
            onContinue={continueAfterValueHook}
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={goBack}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#1a365d] mb-4">
            🎉 Almost there!
          </h1>
          <p className="text-gray-600 mb-6">
            Get your personalized relocation report with country recommendations, visa strategies, and cost breakdowns.
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#38b2ac]/40 focus:border-[#38b2ac] transition"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-[#38b2ac] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#319795] transition disabled:opacity-50"
          >
            {submitting ? "Generating your report..." : "Get My Free Report →"}
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            No spam. Your data is secure and private.
          </p>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <ProgressBar current={currentIndex + 1} total={visibleQuestions.length} />
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
          {currentSection && (
            <div className="text-xs font-semibold text-[#38b2ac] uppercase tracking-wider mb-2">
              {currentSection.title}
            </div>
          )}
          
          <h2 className="text-xl font-bold text-[#1a365d] mb-6 leading-relaxed">
            {currentQ.question}
          </h2>
          
          <QuestionRenderer
            question={currentQ}
            answer={answers[currentQ.id]}
            onChange={handleAnswer}
          />
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={goBack}
            disabled={currentIndex === 0}
            className="text-gray-500 hover:text-gray-700 text-sm disabled:opacity-30"
          >
            ← Previous
          </button>
          
          <div className="flex gap-3">
            {!isMandatory && (
              <button
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Skip
              </button>
            )}
            
            <button
              onClick={goNext}
              disabled={isMandatory && !hasAnswer}
              className="bg-[#38b2ac] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#319795] transition disabled:opacity-50"
            >
              {isLast ? "Complete" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}