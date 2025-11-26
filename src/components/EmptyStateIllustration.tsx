// EmptyStateIllustration — illustration for empty states
// TODO: replace with SVG/illustration assets; client-only
import React from "react";

const EmptyStateIllustration: React.FC<{ message?: string }> = ({ message = "Nothing here" }) => (
  <div className="p-6 text-center text-gray-500">{message}</div>
);

export default EmptyStateIllustration;
