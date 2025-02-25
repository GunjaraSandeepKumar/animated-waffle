import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <Link to={`/article/${article.id}`}> {/* Link to article detail page */}
        <h3 className="text-xl font-semibold text-black dark:text-white">{article.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{article.excerpt}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
