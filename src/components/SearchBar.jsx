import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center space-x-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="p-2 rounded-md w-full max-w-sm"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
    </form>
  );
};

export default SearchBar;
