import React from 'react';

const MobileRestriction = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Mobile Access Restricted
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please access the site on a laptop or desktop for the best user experience.
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          This application is optimized for larger screens to provide you with the best coding experience.
        </div>
      </div>
    </div>
  );
};

export default MobileRestriction; 