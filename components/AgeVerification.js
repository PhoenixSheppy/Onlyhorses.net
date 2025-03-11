import { useState, useEffect } from 'react';

export default function AgeVerification({ onVerify }) {
  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true');
    onVerify(true);
  };

  const handleDecline = () => {
    window.close();
    // Fallback if window.close() fails
    window.location.href = 'about:blank';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Age Verification Required</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You must be 18 years or older to view this content. Please confirm your age to continue.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            I am 18 or older
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            I am under 18
          </button>
        </div>
      </div>
    </div>
  );
}
