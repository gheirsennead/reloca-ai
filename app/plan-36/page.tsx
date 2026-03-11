"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Enhanced36Questionnaire from '@/components/Enhanced36Questionnaire';

function Plan36Content() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get('prefill');
  return <Enhanced36Questionnaire prefillMotivation={prefill} />;
}

export default function Plan36Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafaf9]" />}>
      <Plan36Content />
    </Suspense>
  );
}
