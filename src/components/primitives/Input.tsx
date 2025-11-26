/**
 * Input primitive component
 * Reusable text input with variants and states
 */

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Input component
 * @param label - Input label
 * @param error - Error message to display
 * @param helperText - Helper text below input
 * @param fullWidth - Make input full width
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, fullWidth = true, className = '', ...props },
    ref
  ) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            block w-full px-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-algorand-500 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed
            transition-colors duration-200
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
