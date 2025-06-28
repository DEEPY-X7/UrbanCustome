import React from 'react';

const Loader = ({ text = 'Loading...', size = 12 }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4">
      <div
        className={`w-${size} h-${size} border-4 border-primary border-t-transparent rounded-full animate-spin`}
      />
      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
        {text}
      </p>
    </div>
  );
};

export default Loader;
