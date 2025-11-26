// VisuallyHiddenLabel — label for screen readers
// TODO: use for inputs that need accessible labels (client-only)
import React from "react";

const VisuallyHiddenLabel: React.FC<{ htmlFor?: string; children?: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="sr-only">{children}</label>
);

export default VisuallyHiddenLabel;
