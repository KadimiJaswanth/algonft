import React from 'react';

const NeonButton: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#b46bff] text-black font-bold shadow-neon-lg">{children}</button>
  );
};

export default NeonButton;
