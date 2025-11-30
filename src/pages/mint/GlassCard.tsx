import React from 'react';

const GlassCard: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="p-4 bg-[rgba(255,255,255,0.02)] rounded-lg backdrop-blur border border-[rgba(255,255,255,0.04)] flex items-center gap-3">
      {children}
    </div>
  );
};

export default GlassCard;
