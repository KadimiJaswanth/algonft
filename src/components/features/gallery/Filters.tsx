/**
 * Filters component
 * Filter controls for NFT gallery
 */

import React from 'react';
import { Input, Select } from '@/components/primitives';

interface FilterOptions {
  searchQuery: string;
  sortBy: 'name' | 'date' | 'value';
  filterBy: 'all' | 'owned' | 'created';
}

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

/**
 * Filters component
 * Controls for filtering and sorting NFTs
 */
export const Filters: React.FC<FiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200">
      {/* Search */}
      <Input
        placeholder="Search NFTs..."
        value={filters.searchQuery}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            searchQuery: e.target.value,
          })
        }
      />

      {/* Sort By */}
      <Select
        label="Sort By"
        options={[
          { label: 'Name (A-Z)', value: 'name' },
          { label: 'Date Created', value: 'date' },
          { label: 'Value', value: 'value' },
        ]}
        value={filters.sortBy}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            sortBy: e.target.value as FilterOptions['sortBy'],
          })
        }
      />

      {/* Filter By */}
      <Select
        label="Filter By"
        options={[
          { label: 'All NFTs', value: 'all' },
          { label: 'My NFTs', value: 'owned' },
          { label: 'Created by Me', value: 'created' },
        ]}
        value={filters.filterBy}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            filterBy: e.target.value as FilterOptions['filterBy'],
          })
        }
      />
    </div>
  );
};

Filters.displayName = 'Filters';
