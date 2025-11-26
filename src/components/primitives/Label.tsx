/**
 * Label primitive component
 * Form label with optional required indicator
 */

import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: React.ReactNode;
}

/**
 * Label component
 * @param required - Show required indicator
 * @param children - Label text
 */
export const Label: React.FC<LabelProps> = ({
  required = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <label
      className={`
        block text-sm font-medium text-gray-700
        ${className}
      `}
      {...props}
    >
      {children}
      {required && <span className="text-red-600 ml-1">*</span>}
    </label>
  );
};

Label.displayName = 'Label';
