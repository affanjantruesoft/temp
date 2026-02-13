import React from 'react';

export function ForbiddenState({ message = 'You do not have permission to view this content' }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="text-yellow-500 text-5xl mb-4">🔒</div>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}
