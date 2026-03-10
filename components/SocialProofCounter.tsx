"use client";

import { useState, useEffect } from "react";

export function SocialProofCounter() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fetch real count from analytics
    fetch("/api/analytics")
      .then(r => r.json())
      .then(data => {
        // Use real quiz starts + a base (to avoid showing "2 families")
        const realStarts = data?.conversion_funnel?.questionnaire_starts || 0;
        // Show a meaningful number: real activity + realistic base
        setCount(Math.max(realStarts, 12));
        setVisible(true);
      })
      .catch(() => {
        setCount(12);
        setVisible(true);
      });
  }, []);

  if (!visible) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 shadow-sm">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span>
        <strong className="text-[#1a365d]">{count}+ families</strong> exploring relocation this week
      </span>
    </div>
  );
}

export function SocialProofToast() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messages = [
      "🇸🇪 Someone from Sweden just got their report!",
      "🇳🇱 Someone from the Netherlands just got their report!",
      "🇺🇸 A family in Texas started their assessment",
      "🇬🇧 Someone from the UK is exploring their options",
      "🇫🇷 A couple from France is comparing countries",
      "🇨🇦 A Canadian just completed the quiz",
      "🇩🇪 Someone from Germany is planning their move",
    ];

    // Shuffle and pick two different messages
    const shuffled = [...messages].sort(() => Math.random() - 0.5);

    // Show first toast after 20-40 seconds
    const firstDelay = 20000 + Math.random() * 20000;
    
    const showToast = (msg: string) => {
      setMessage(msg);
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    };

    const timer1 = setTimeout(() => {
      showToast(shuffled[0]);
    }, firstDelay);

    // Show second toast 60-90 seconds later
    const timer2 = setTimeout(() => {
      showToast(shuffled[1]);
    }, firstDelay + 60000 + Math.random() * 30000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-[slideUp_0.4s_ease-out]">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-5 py-3 flex items-center gap-3 max-w-sm">
        <div className="text-sm text-gray-700">{message}</div>
        <button onClick={() => setShow(false)} className="text-gray-300 hover:text-gray-500 text-xs">✕</button>
      </div>
    </div>
  );
}
