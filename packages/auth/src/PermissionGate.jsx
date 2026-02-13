import React from 'react';
import { session } from './session.js';

export function PermissionGate({ permission, children, fallback }) {
  if (!session.hasPermission(permission)) {
    return fallback || null;
  }

  return children;
}
