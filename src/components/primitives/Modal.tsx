/**
 * Modal primitive component
 * Dialog/modal for displaying content
 */

import React, { useEffect } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeButton?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

/**
 * Modal component
 * @param isOpen - Whether modal is open
 * @param onClose - Callback when modal should close
 * @param title - Modal title
 * @param children - Modal content
 * @param footer - Optional footer with actions
 * @param size - Modal size (default: 'md')
 * @param closeButton - Show close button (default: true)
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeButton = true,
}) => {
  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`
        relative bg-white rounded-lg shadow-xl
        w-full mx-4 ${sizeClasses[size]}
        max-h-[90vh] overflow-y-auto
      `}>
        {/* Header */}
        {(title || closeButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            {closeButton && (
              <button
                onClick={onClose}
                className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
