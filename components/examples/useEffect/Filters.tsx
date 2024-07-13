// ui/filters.tsx

import React from 'react'

interface FiltersProps {
  filters: any // Замените `any` на более конкретный тип, если возможно
  onChangeFilters: (newFilters: any) => void // Замените `any` на более конкретный тип, если возможно
}

const Filters: React.FC<FiltersProps> = ({ filters, onChangeFilters }) => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search..."
        value={filters.search || ''}
        onChange={(e) =>
          onChangeFilters({ ...filters, search: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />
      {/* Добавьте здесь другие элементы управления фильтрации */}
    </div>
  )
}

export default Filters
