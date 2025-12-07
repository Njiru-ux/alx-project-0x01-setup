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
          background-color: #f9fafb;
        }
        
        /* Utility classes needed for the entire application */
        
        /* Layout */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .min-h-screen { min-height: 100vh; }
        .h-screen { height: 100vh; }
        .flex-grow { flex-grow: 1; }
        
        /* Alignment */
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        
        /* Spacing */
        .m-4 { margin: 1rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
        .my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
        
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        
        /* Grid */
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        
        /* Typography */
        .text-center { text-align: center; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-7xl { font-size: 4.5rem; line-height: 1; }
        
        .font-thin { font-weight: 100; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        
        .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .line-clamp-3 { 
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        
        /* Colors */
        .text-white { color: white; }
        .text-gray-500 { color: #6b7280; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-700 { color: #374151; }
        .text-gray-800 { color: #1f2937; }
        .text-blue-500 { color: #3b82f6; }
        .text-blue-600 { color: #2563eb; }
        .text-green-600 { color: #059669; }
        
        .bg-white { background-color: white; }
        .bg-gray-900 { background-color: #111827; }
        .bg-blue-100 { background-color: #dbeafe; }
        .bg-blue-500 { background-color: #3b82f6; }
        .bg-blue-600 { background-color: #2563eb; }
        .bg-blue-700 { background-color: #1d4ed8; }
        .bg-gray-200 { background-color: #e5e7eb; }
        
        /* Opacity */
        .bg-opacity-50 { background-color: rgba(17, 24, 39, 0.5); }
        
        /* Effects */
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
        .hover\\:shadow-md:hover { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
        .hover\\:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
        .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
        
        .transition { transition: all 0.2s ease; }
        .transition-colors { transition-property: color, background-color, border-color; }
        .transition-shadow { transition-property: box-shadow; }
        .duration-300 { transition-duration: 300ms; }
        
        /* Hover states */
        .hover\\:bg-blue-600:hover { background-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .hover\\:bg-blue-800:hover { background-color: #1e40af; }
        .hover\\:bg-gray-200:hover { background-color: #e5e7eb; }
        .hover\\:bg-gray-300:hover { background-color: #d1d5db; }
        .hover\\:text-blue-600:hover { color: #2563eb; }
        .hover\\:text-gray-800:hover { color: #1f2937; }
        .hover\\:underline:hover { text-decoration: underline; }
        
        /* Container */
        .container { width: 100%; margin-left: auto; margin-right: auto; }
        @media (min-width: 640px) { .container { max-width: 640px; } }
        @media (min-width: 768px) { .container { max-width: 768px; } }
        @media (min-width: 1024px) { .container { max-width: 1024px; } }
        @media (min-width: 1280px) { .container { max-width: 1280px; } }
        
        /* Max width */
        .max-w-md { max-width: 28rem; }
        .max-w-xl { max-width: 36rem; }
        .w-full { width: 100%; }
        
        /* Background gradients */
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-500 { --tw-gradient-from: #3b82f6; }
        .to-purple-600 { --tw-gradient-to: #7c3aed; }
        
        /* For the Header component */
        .space-x-6 > * + * { margin-left: 1.5rem; }
        
        /* For the UserCard component */
        .w-12 { width: 3rem; }
        .w-16 { width: 4rem; }
        .w-5 { width: 1.25rem; }
        .h-12 { height: 3rem; }
        .h-16 { height: 4rem; }
        .h-5 { height: 1.25rem; }
        .mr-4 { margin-right: 1rem; }
        .mr-3 { margin-right: 0.75rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        
        /* Focus states */
        .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
        .focus\\:ring-2:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
        .focus\\:ring-offset-2:focus { outline-offset: 2px; }
        .focus\\:ring-blue-500:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
        .focus\\:ring-gray-400:focus { box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5); }
        
        /* Border */
        .border { border-width: 1px; border-color: #e5e7eb; }
        .border-t { border-top-width: 1px; }
        .border-b { border-bottom-width: 1px; }
        .border-gray-200 { border-color: #e5e7eb; }
        
        /* Position */
        .fixed { position: fixed; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-50 { z-index: 50; }
        
        /* Form elements */
        input, textarea, button, select {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="url"],
        input[type="number"],
        textarea,
        select {
          width: 100%;
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          background-color: white;
          box-sizing: border-box;
        }
        
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        input[type="url"]:focus,
        input[type="number"]:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        textarea {
          min-height: 100px;
          resize: vertical;
        }
        
        button {
          cursor: pointer;
        }
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Labels */
        label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        
        /* Required field indicator */
        input:required, textarea:required, select:required {
          border-left: 3px solid #3b82f6;
        }
        
        /* Placeholder */
        ::placeholder {
          color: #9ca3af;
          opacity: 1;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        /* Responsive breakpoints - important for media queries */
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        
        /* Modal backdrop */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        /* Alert and notification styling */
        .alert-success {
          background-color: #d1fae5;
          border-color: #34d399;
          color: #065f46;
        }
        
        .alert-error {
          background-color: #fee2e2;
          border-color: #f87171;
          color: #991b1b;
        }
        
        .alert-info {
          background-color: #dbeafe;
          border-color: #60a5fa;
          color: #1e40af;
        }
        
        /* Card hover effects */
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Button animations */
        .btn-animate {
          transition: all 0.2s ease;
        }
        
        .btn-animate:hover {
          transform: translateY(-1px);
        }
        
        .btn-animate:active {
          transform: translateY(0);
        }
        
        /* Input animations */
        .input-animate {
          transition: all 0.2s ease;
        }
        
        .input-animate:focus {
          transform: scale(1.02);
        }
        
        /* Loading spinner */
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Fade animations */
        .fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .fade-out {
          animation: fadeOut 0.3s ease-out;
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        /* Slide animations for modals */
        .slide-in {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .slide-out {
          animation: slideOut 0.3s ease-in;
        }
        
        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
        
        /* Responsive utilities */
        .hidden { display: none; }
        .block { display: block; }
        .inline-block { display: inline-block; }
        
        @media (max-width: 640px) {
          .sm\\:hidden { display: none; }
          .sm\\:block { display: block; }
          .sm\\:flex { display: flex; }
          .sm\\:grid { display: grid; }
        }
        
        @media (max-width: 768px) {
          .md\\:hidden { display: none; }
          .md\\:block { display: block; }
          .md\\:flex { display: flex; }
          .md\\:grid { display: grid; }
        }
        
        @media (max-width: 1024px) {
          .lg\\:hidden { display: none; }
          .lg\\:block { display: block; }
          .lg\\:flex { display: flex; }
          .lg\\:grid { display: grid; }
        }
        
        /* Print styles */
        @media print {
          .no-print { display: none; }
          .print-only { display: block; }
          body { background: white; }
          .shadow-lg, .shadow-md, .shadow-sm { box-shadow: none; }
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;