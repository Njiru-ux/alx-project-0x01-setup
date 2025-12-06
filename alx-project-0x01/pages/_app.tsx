import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Embedded Tailwind-like styles
const globalStyles = `
  /* Tailwind base */
  *, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }
  
  /* Your custom styles */
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  
  /* Utility classes */
  .min-h-screen { min-height: 100vh; }
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .flex-grow { flex-grow: 1; }
  .justify-center { justify-content: center; }
  .items-center { align-items: center; }
  .h-screen { height: 100vh; }
  .text-7xl { font-size: 4.5rem; line-height: 1; }
  .font-thin { font-weight: 100; }
  /* Add more as needed */
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;