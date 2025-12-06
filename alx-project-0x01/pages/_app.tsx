import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        /* Basic styles for the application */
        body { 
          margin: 0; 
          padding: 0; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        /* Utility classes */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .h-screen { height: 100vh; }
        .flex-grow { flex-grow: 1; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .text-center { text-center; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .rounded-full { border-radius: 9999px; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-white { color: white; }
        .bg-blue-600 { background-color: #2563eb; }
        .bg-white { background-color: white; }
        .text-blue-500 { color: #3b82f6; }
        .hover\\:bg-gray-200:hover { background-color: #e5e7eb; }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (min-width: 640px) { .container { max-width: 640px; } }
        @media (min-width: 768px) { .container { max-width: 768px; } }
        @media (min-width: 1024px) { .container { max-width: 1024px; } }
        @media (min-width: 1280px) { .container { max-width: 1280px; } }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .space-x-6 > * + * { margin-left: 1.5rem; }
        .hover\\:underline:hover { text-decoration: underline; }
        .transition { transition: all 0.2s ease; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-500 { --tw-gradient-from: #3b82f6; }
        .to-purple-600 { --tw-gradient-to: #7c3aed; }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;