import React from "react";

const PortalEffect = ({ active }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute w-0 h-0 animate-portal-open">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-4 border-indigo-500 opacity-0 animate-portal-ring"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-4 border-purple-500 opacity-0 animate-portal-ring-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border-4 border-pink-500 opacity-0 animate-portal-ring-delay-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full animate-portal-core"></div>
      </div>
      <div className="absolute inset-0 bg-black animate-fade-to-black"></div>
    </div>
  );
};

export default PortalEffect;
