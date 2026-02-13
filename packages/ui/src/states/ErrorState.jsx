import React from 'react';

export function ErrorState({ message = 'Something went wrong', onRetry }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="text-red-500 text-5xl mb-4">⚠</div>
        <p className="text-gray-700 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
