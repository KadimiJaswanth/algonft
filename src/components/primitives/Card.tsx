/**
 * Card primitive component
 * Container for content with optional header and footer
 */

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Card component
 * @param header - Optional header content
 * @param footer - Optional footer content
 * @param children - Card content
 */
export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg border border-gray-200 overflow-hidden
        shadow-sm hover:shadow-md transition-shadow duration-200
        ${className}
      `}
      {...props}
    >
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.displayName = 'Card';
