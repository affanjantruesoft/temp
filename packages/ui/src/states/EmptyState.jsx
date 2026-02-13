import React from 'react';

export function EmptyState({ message = 'No data available', action }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="text-gray-400 text-5xl mb-4">📭</div>
        <p className="text-gray-600 mb-4">{message}</p>
        {action && action}
      </div>
    </div>
  );
}
