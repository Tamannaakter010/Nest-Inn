import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom'; // ✅ Correct import
import { router } from './Router/Routes.jsx'; // ✅ Correct path
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> 
      <RouterProvider router={router}> 
        <div className="max-w-screen-xl mx-auto"> 
          <App />
        </div>
      </RouterProvider>
    </ClerkProvider>
  </StrictMode>
);
