"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
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

function PrivacyIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="text-6xl mb-6">🔒</div>
        <h1 className="text-3xl font-bold text-[#1a365d] mb-6">
          Your Privacy Matters
        </h1>
        <div className="text-left space-y-4 text-gray-600 leading-relaxed mb-8">
          <p>
            <strong>We value your freedom and privacy.</strong> Your personal information stays private and secure - we don't sell, share, or track your data beyond creating your personalized report.
          </p>
          <p>
            <strong>Why so many questions?</strong> We've learned that comprehensive questionnaires create dramatically better reports. Every question helps us understand your unique situation and provide recommendations tailored specifically to you.
          </p>
          <p>
            <strong>Nothing is mandatory</strong> (except a few basics). Answer what you're comfortable with - though more details = more personalized insights.
          </p>
          <p>
            <strong>Takes 8-12 minutes.</strong> Grab a coffee, and let's build your perfect relocation roadmap.
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full bg-[#38b2ac] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#319795] transition text-lg"
        >
          Let's Get Started →
        </button>
      </div>
    </div>
  );
}

function MotivationPause({ 
  title, 
  message, 
  progress, 
  onContinue 
}: { 
  title: string; 
  message: string; 
  progress: number;
  onContinue: () => void;
}) {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 my-6 border border-teal-100">
      <div className="text-center">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="bg-white rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#38b2ac] to-teal-400 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mb-4">{progress}% complete</p>
        <button
          onClick={onContinue}
          className="bg-[#38b2ac] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#319795] transition"
        >
          Continue Building My Report →
        </button>
      </div>
    </div>
  );
}

function QualityLoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "🔍 Analyzing your preferences and priorities...",
    "🌎 Matching you with ideal destinations worldwide...",
    "💰 Calculating personalized cost breakdowns...",
    "🏠 Finding property options in your budget...",
    "📋 Researching visa requirements for your nationality...",
    "🏥 Evaluating healthcare and education options...",
    "⚖️ Computing tax optimization strategies...",
    "✨ Crafting your personalized roadmap..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          onComplete();
          return 100;
        }
        return prev + 2;
      });
    }, 120); // ~12 seconds total

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="text-6xl mb-6 animate-pulse">⚡</div>
        <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
          Creating Your Premium Report
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're processing your information through our comprehensive database of government sources, 
          real estate markets, and local expertise to create the most detailed and accurate 
          relocation report available. This takes about 60 seconds because quality matters.
        </p>
        
        <div className="bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#38b2ac] via-teal-400 to-blue-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-[#38b2ac] font-medium mb-4 min-h-[1.5em]">
          {steps[currentStep]}
        </div>
        
        <p className="text-sm text-gray-500">
          {Math.round(progress)}% complete • Creating the best relocation report on the market
        </p>
        
        {progress > 80 && (
          <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
            <p className="text-sm text-teal-700">
              🎉 <strong>Almost ready!</strong> Your personalized report will include exact visa timelines, 
              property recommendations, tax strategies, and step-by-step relocation guidance.
            </p>
          </div>
        )}
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

export default function EnhancedQuestionnaire() {
  const [showPrivacyIntro, setShowPrivacyIntro] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [skipped, setSkipped] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showMotivationPause, setShowMotivationPause] = useState(false);
  const [currentMotivation, setCurrentMotivation] = useState<any>(null);

  // Track questionnaire start
  useEffect(() => {
    if (!showPrivacyIntro) {
      analytics.trackFeatureUsage('questionnaire', 'start', { version: 'enhanced_original' });
    }
  }, [showPrivacyIntro]);

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
  const progress = Math.round(((currentIndex + 1) / visibleQuestions.length) * 100);

  const handleAnswer = useCallback((val: Answer) => {
    if (!currentQ) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: val }));
    
    // Track question answer
    analytics.trackFeatureUsage('questionnaire', 'answer', {
      questionId: currentQ.id,
      questionText: currentQ.question,
      section: currentQ.section,
      isMandatory: MANDATORY_QUESTIONS.includes(currentQ.id),
      version: 'enhanced_original'
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

  // Motivation pauses at key points
  const motivationMessages = {
    25: {
      title: "Great Progress! 🎉",
      message: "You're 25% done! We're already gathering insights about your perfect destination. Your detailed responses help us recommend the best countries, cities, and strategies for your unique situation."
    },
    50: {
      title: "Halfway There! 🚀", 
      message: "Amazing! You're building something special here. The more details you provide, the more personalized and actionable your report becomes. We're matching you with countries and calculating real costs."
    },
    75: {
      title: "Almost Ready! ✨",
      message: "You're 75% complete! Just a few more questions and we'll generate your comprehensive relocation roadmap with visa timelines, property recommendations, and step-by-step guidance."
    }
  };

  const checkForMotivationPause = useCallback((questionId: number) => {
    const progress = Math.round(((currentIndex + 1) / visibleQuestions.length) * 100);
    
    if ([25, 50, 75].includes(progress) && motivationMessages[progress as keyof typeof motivationMessages]) {
      setCurrentMotivation({
        ...motivationMessages[progress as keyof typeof motivationMessages],
        progress
      });
      setShowMotivationPause(true);
      return true;
    }
    return false;
  }, [currentIndex, visibleQuestions.length]);

  const goNext = useCallback(() => {
    if (isLast) {
      setCompleted(true);
      analytics.trackFeatureUsage('questionnaire', 'reach_completion_screen', { version: 'enhanced_original' });
      return;
    }

    // Check for motivation pause
    if (checkForMotivationPause(currentQ?.id || 0)) {
      return; // Stay on current question, show motivation
    }

    setCurrentIndex((i) => Math.min(i + 1, visibleQuestions.length - 1));
  }, [isLast, visibleQuestions.length, currentQ, checkForMotivationPause]);

  const goBack = useCallback(() => {
    if (showMotivationPause) {
      setShowMotivationPause(false);
      return;
    }
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, [showMotivationPause]);

  const handleSkip = useCallback(() => {
    if (!currentQ) return;
    setSkipped((prev) => [...prev, currentQ.id]);
    goNext();
  }, [currentQ, goNext]);

  const continueAfterMotivation = useCallback(() => {
    setShowMotivationPause(false);
    setCurrentIndex((i) => Math.min(i + 1, visibleQuestions.length - 1));
  }, [visibleQuestions.length]);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowLoading(true);
    
    // Track questionnaire completion
    analytics.trackFeatureUsage('questionnaire', 'complete', {
      totalAnswered: Object.keys(answers).length,
      totalSkipped: skipped.length,
      completionRate: Math.round((Object.keys(answers).length / visibleQuestions.length) * 100),
      version: 'enhanced_original'
    });
    
    try {
      // Save questionnaire + get report ID (fast — no AI generation yet)
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, answers, skipped, version: 'enhanced_original' }),
      });
      const data = await res.json();
      if (data.reportId) {
        // Track lead generation
        analytics.trackConversion('report_purchase', 0); // Free report 
        if (data.userId) {
          analytics.setUserId(data.userId);
        }
        
        // Store answers in sessionStorage so report page can trigger generation
        sessionStorage.setItem('reloca_answers', JSON.stringify(answers));
        sessionStorage.setItem('reloca_userId', data.userId);
        window.location.href = `/report/${data.reportId}`;
      } else {
        setEmailError(data.error || "Something went wrong. Please try again.");
        setShowLoading(false);
      }
    } catch {
      setEmailError("Connection error. Please try again.");
      setShowLoading(false);
    }
  };

  // Privacy intro screen
  if (showPrivacyIntro) {
    return <PrivacyIntro onContinue={() => setShowPrivacyIntro(false)} />;
  }

  // Quality loading screen
  if (showLoading) {
    return <QualityLoadingScreen onComplete={() => {}} />;
  }

  // Motivation pause screen
  if (showMotivationPause && currentMotivation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <ProgressBar current={currentIndex + 1} total={visibleQuestions.length} />
          <MotivationPause 
            title={currentMotivation.title}
            message={currentMotivation.message}
            progress={currentMotivation.progress}
            onContinue={continueAfterMotivation}
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

  // Completion screen
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#1a365d] mb-4">
            🎉 Questionnaire Complete!
          </h1>
          <p className="text-gray-600 mb-6">
            Amazing work! Get your personalized relocation report with country recommendations, visa strategies, property options, and step-by-step guidance.
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
            {submitting ? "Creating your premium report..." : "Get My Personalized Report →"}
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            Private & secure. The most detailed relocation report available.
          </p>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  // Current section info
  const currentSection = SECTIONS.find((s) => s.id === currentQ.section);

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

          {!isMandatory && (
            <p className="text-xs text-gray-500 mt-3">
              💡 This question is optional, but answering helps us personalize your report
            </p>
          )}
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