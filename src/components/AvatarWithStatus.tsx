// AvatarWithStatus — avatar with a small status indicator
// TODO: reflect online/offline or wallet connection status (client-only)
import React from "react";

const AvatarWithStatus: React.FC<{ name?: string }> = ({ name = "User" }) => (
  <div className="flex items-center gap-2"><div className="w-8 h-8 bg-gray-300 rounded-full" />{name}</div>
);

export default AvatarWithStatus;
