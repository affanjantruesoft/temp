import React from 'react';

export function LoadingState({ message = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-primary-500 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
}
