import React from 'react';
import ArticleCard from './ArticleCard';

const FeaturedArticles = ({ articles }) => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center">Featured Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
