import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ info }) => {
  const [showMoreIngredients, setShowMoreIngredients] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const maxIngredientsToShow = 3; // Limit to 3 ingredients
  const maxCategoriesToShow = 3; // Limit to 3 categories

  const handleShowMoreIngredients = () => {
    setShowMoreIngredients(!showMoreIngredients);
  };

  const handleShowMoreCategories = () => {
    setShowMoreCategories(!showMoreCategories);
  };

  return (
    <div className="recipe-card bg-gradient-to-r from-orange-100 via-red-100 to-yellow-50 rounded-xl shadow-lg p-6 m-4 w-80 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {info.image && (
        <img
          src={info.image || 'default-image.jpg'} // Placeholder image if no image is provided
          alt={info.title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      )}
      <h2 className="text-2xl font-bold mt-3 text-gray-800 truncate hover:text-red-500 transition-colors duration-200">
        {info.title}
      </h2>
      <p className="text-gray-600 text-sm mt-1 truncate">
        {info.desc || 'No description available'}
      </p>
      <div className="mt-2 text-gray-800">
        <strong>Rating:</strong> <span className="text-yellow-500">{info.rating || 'N/A'}</span>
      </div>

      {info.categories && info.categories.length > 0 && (
        <div className="mt-2 text-gray-800">
          <strong>Categories:</strong>
          <ul className="max-h-24 overflow-y-auto">
            {info.categories.slice(0, maxCategoriesToShow).map((category, index) => (
              <li key={index} className="text-sm bg-red-200 px-2 py-1 rounded-md inline-block m-1">
                {category}
              </li>
            ))}
            {info.categories.length > maxCategoriesToShow && (
              <li>
                <button
                  onClick={handleShowMoreCategories}
                  className="text-red-500 underline text-sm"
                >
                  {showMoreCategories ? 'Show Less' : 'Show More'}
                </button>
                {showMoreCategories && (
                  <ul className="mt-2">
                    {info.categories.slice(maxCategoriesToShow).map((category, index) => (
                      <li key={index} className="text-sm bg-yellow-200 px-2 py-1 rounded-md inline-block m-1">
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      )}

      {info.ingredients && info.ingredients.length > 0 && (
        <div className="mt-2 text-gray-800">
          <strong>Ingredients:</strong>
          <ul className="max-h-24 overflow-y-auto">
            {info.ingredients.slice(0, maxIngredientsToShow).map((ingredient, index) => (
              <li key={index} className="text-sm bg-orange-200 px-2 py-1 rounded-md inline-block m-1">
                {ingredient}
              </li>
            ))}
            {info.ingredients.length > maxIngredientsToShow && (
              <li>
                <button
                  onClick={handleShowMoreIngredients}
                  className="text-orange-500 underline text-sm"
                >
                  {showMoreIngredients ? 'Show Less' : 'Show More'}
                </button>
                {showMoreIngredients && (
                  <ul className="mt-2">
                    {info.ingredients.slice(maxIngredientsToShow).map((ingredient, index) => (
                      <li key={index} className="text-sm bg-yellow-200 px-2 py-1 rounded-md inline-block m-1">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

RecipeCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

RecipeCard.defaultProps = {
  info: {
    desc: 'No description available',
    rating: 'N/A',
    categories: [],
    ingredients: [],
  },
};

export default RecipeCard;
