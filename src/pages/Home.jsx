import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import FeaturedArticles from '../components/FeaturedArticles';

const Home = () => {
  const { category } = useParams();  // Get the category from the URL
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  // Simulating API call for articles data
  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = [
        { id: 1, title: "Breaking News: React Updates", excerpt: "The latest features of React released this month.", content: "Full content here...", category: "Technology", comments: ["Amazing!", "Great update!"] },
        { id: 2, title: "Business Trends in 2025", excerpt: "Top business trends expected for the next year.", content: "Full content here...", category: "Business", comments: [] },
        { id: 3, title: "Sports Highlights: Winter Olympics", excerpt: "Key moments from the latest Winter Olympics.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 4, title: "How AI is Changing the World", excerpt: "Exploring AI applications in various industries.", content: "Full content here...", category: "Technology", comments: ["Insightful article!", "AI is revolutionizing everything."] },
        { id: 5, title: "Top 10 Business Startups", excerpt: "A list of top business startups you need to know.", content: "Full content here...", category: "Business", comments: [] },
      ];
      setArticles(fetchedArticles);
    };
    
    fetchArticles();
  }, []);

  // UseEffect to filter articles when category changes
  useEffect(() => {
    if (category) {
      const filtered = articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [category, articles]);

  // Search functionality
  const handleSearch = (query) => {
    if (query === '') {
      setFilteredArticles(articles);
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery)
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Featured Articles Section */}
      <FeaturedArticles articles={articles} />

      {/* Display category-specific articles */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
