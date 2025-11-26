/**
 * Pagination component
 * Page navigation controls
 */

import React from 'react';
import { Button } from '@/components/primitives';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

/**
 * Pagination component
 * Navigation buttons for paginated content
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  // Calculate page range to display
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
      >
        ← Previous
      </Button>

      {/* Page Numbers */}
      {startPage > 1 && (
        <>
          <Button
            onClick={() => onPageChange(1)}
            variant={currentPage === 1 ? 'primary' : 'outline'}
            size="sm"
          >
            1
          </Button>
          {startPage > 2 && (
            <span className="px-2 text-gray-500">...</span>
          )}
        </>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={currentPage === page ? 'primary' : 'outline'}
          size="sm"
        >
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <Button
            onClick={() => onPageChange(totalPages)}
            variant={currentPage === totalPages ? 'primary' : 'outline'}
            size="sm"
          >
            {totalPages}
          </Button>
        </>
      )}

      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        size="sm"
      >
        Next →
      </Button>
    </div>
  );
};

Pagination.displayName = 'Pagination';
