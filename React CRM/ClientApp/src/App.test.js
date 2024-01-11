import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from './components/routes/AuthProvider'
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
      <MemoryRouter>
          <AuthProvider>
              <App />
          </AuthProvider>
    </MemoryRouter>);
  //await new Promise(resolve => setTimeout(resolve, 1000));
});
