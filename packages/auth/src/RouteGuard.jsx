import React from 'react';
import { session } from './session.js';

export function RouteGuard({ children, fallback }) {
  if (!session.isAuthenticated()) {
    return fallback || <div>Please log in to continue</div>;
  }

  return children;
}
