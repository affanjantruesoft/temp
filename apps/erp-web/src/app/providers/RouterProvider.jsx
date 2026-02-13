import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell.jsx';
import { routes } from '../routes/index.jsx';

export function RouterProvider() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/hr/dashboard" replace />} />

          {/* All other routes */}
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
