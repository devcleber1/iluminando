import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-4 border-yellow-500 border-solid rounded-full animate-spin border-t-transparent"></div>
        <p className="text-yellow-500 text-lg font-semibold">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;