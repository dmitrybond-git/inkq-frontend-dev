'use client'

import { useState } from 'react'

export default function Page({ }: { params: { lang: string } }) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    style: '',
    color: '',
    city: '',
  })

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wide">
        Найди своего художника
      </h2>

      <form className="space-y-8">
        {/* Search bar */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по имени или описанию..."
          className="w-full h-14 px-5 border border-black text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
        />

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="стиль"
            value={filters.style}
            onChange={(e) => setFilters({ ...filters, style: e.target.value })}
            className="h-14 w-full px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="цвет"
            value={filters.color}
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
            className="h-14 w-full px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="город"
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="h-14 w-full px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </form>
    </div>
  )
}
