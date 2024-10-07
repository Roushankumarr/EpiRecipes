import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ onFilterChange }) => {
  const keywords = ['Healthy', 'Garlic', 'Herb', 'Salad', 'Egg', 'Chicken', 'Vegetarian'];
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState(['All']);

  useEffect(() => {
    if (selectedKeywords.length === 0) {
      setSelectedKeywords(['All']);
    }
  }, [selectedKeywords]);

  const handleKeywordChange = (keyword) => {
    if (keyword === 'All') {
      setSelectedKeywords(['All']);
      onFilterChange([]);
    } else {
      let updatedKeywords = selectedKeywords.includes(keyword)
        ? selectedKeywords.filter((k) => k !== keyword)
        : [...selectedKeywords.filter((k) => k !== 'All'), keyword];

      if (updatedKeywords.length === 0) {
        updatedKeywords = ['All'];
      }

      setSelectedKeywords(updatedKeywords);
      onFilterChange(updatedKeywords.filter((k) => k !== 'All'));
    }
  };

  return (
    <div className="category-filter p-4 border rounded-md bg-white shadow-lg">
      <button
        className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow transition duration-300 ease-in-out hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
        onClick={() => setShowFilterOptions(!showFilterOptions)}
      >
        {showFilterOptions ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilterOptions && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="All"
              checked={selectedKeywords.includes('All')}
              onChange={() => handleKeywordChange('All')}
              className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <span className="text-lg">All</span>
          </label>

          {keywords.map((keyword) => (
            <label key={keyword} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={keyword}
                checked={selectedKeywords.includes(keyword)}
                onChange={() => handleKeywordChange(keyword)}
                className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="text-lg">{keyword}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
