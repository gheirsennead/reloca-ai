'use client';

import { useState } from 'react';

interface FeedbackSurveyProps {
  reportId: string;
}

export function FeedbackSurvey({ reportId }: FeedbackSurveyProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [canPublish, setCanPublish] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportId,
          rating,
          comment: comment.trim() || null,
          canPublish,
          displayName: displayName.trim() || null,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch {
      alert('Failed to submit feedback. Please try again.');
    }
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-green-600 text-2xl mb-2">✓</div>
        <h3 className="font-semibold text-green-800 mb-2">Thank you for your feedback!</h3>
        <p className="text-green-700 text-sm">
          {rating >= 4 && canPublish ? 
            "Your review may appear on our homepage to help other expats." :
            "We appreciate your input and will use it to improve our reports."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-[#1a365d] mb-4 text-center">How was this report?</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Star Rating */}
        <div className="text-center">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate this report?
          </label>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl transition-colors ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
                }`}
                aria-label={`${star} star${star > 1 ? 's' : ''}`}
              >
                ⭐
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              {rating === 5 ? 'Excellent!' : rating === 4 ? 'Very good!' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Needs improvement'}
            </p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What was most useful? <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="E.g., tax section, visa requirements, cost breakdown..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent text-sm"
            maxLength={500}
          />
        </div>

        {/* Publishing Consent */}
        <div className="border-t border-gray-200 pt-4">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={canPublish}
              onChange={(e) => setCanPublish(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#38b2ac] border-gray-300 rounded focus:ring-[#38b2ac]"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-700">Can we use your feedback on our site?</div>
              <div className="text-gray-500">Help other expats by sharing your experience</div>
            </div>
          </label>
          
          {canPublish && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Display name <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John D."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent text-sm"
                maxLength={50}
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank to show as "Anonymous"
              </p>
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={!rating || isLoading}
            className="bg-[#38b2ac] hover:bg-[#2c9a94] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm"
          >
            {isLoading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </div>
      </form>
    </div>
  );
}