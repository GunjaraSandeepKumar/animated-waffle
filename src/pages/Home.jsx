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
        { id: 6, title: "React Performance Optimization Tips", excerpt: "Best practices to make React apps faster.", content: "Full content here...", category: "Technology", comments: ["Great insights!"] },
        { id: 7, title: "Global Market Predictions", excerpt: "How the global market is shifting in 2025.", content: "Full content here...", category: "Business", comments: [] },
        { id: 8, title: "Olympics 2024: A Look Ahead", excerpt: "What to expect from the 2024 Olympics.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 9, title: "The Future of Autonomous Vehicles", excerpt: "How self-driving cars will change transportation.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 10, title: "Exploring the Digital Transformation in Business", excerpt: "How digital transformation is affecting companies globally.", content: "Full content here...", category: "Business", comments: [] },
        { id: 11, title: "Fitness Trends for 2025", excerpt: "The future of fitness and health trends.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 12, title: "Understanding Blockchain Technology", excerpt: "Blockchain’s impact on business and finance.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 13, title: "Investment Strategies for 2025", excerpt: "How to invest smartly in the next decade.", content: "Full content here...", category: "Business", comments: ["Great advice!"] },
        { id: 14, title: "Winter Sports: Essential Equipment", excerpt: "A guide to the best equipment for winter sports.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 15, title: "The Impact of 5G on Businesses", excerpt: "What 5G will bring to the business world.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 16, title: "The Rise of E-commerce in 2025", excerpt: "E-commerce will take over as the main form of shopping.", content: "Full content here...", category: "Business", comments: [] },
        { id: 17, title: "Inside the 2024 Winter Olympics", excerpt: "Behind the scenes of the Winter Olympics.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 18, title: "AI and Healthcare: What’s Next?", excerpt: "AI is revolutionizing healthcare practices.", content: "Full content here...", category: "Technology", comments: ["A fascinating read!"] },
        { id: 19, title: "The New World of Fintech", excerpt: "Fintech’s role in modern financial services.", content: "Full content here...", category: "Business", comments: [] },
        { id: 20, title: "The Best Winter Ski Resorts", excerpt: "Top destinations for winter sports lovers.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 21, title: "A Guide to Web Development in 2025", excerpt: "What’s new in web development this year.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 22, title: "Key Business Trends in Asia", excerpt: "Business opportunities and trends across Asia.", content: "Full content here...", category: "Business", comments: [] },
        { id: 23, title: "Women’s Sports: Breaking Barriers", excerpt: "How women’s sports are gaining popularity.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 24, title: "The Future of Cloud Computing", excerpt: "Where cloud computing is headed in the next decade.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 25, title: "Startup Ecosystems Around the World", excerpt: "Top regions and cities for startup growth.", content: "Full content here...", category: "Business", comments: [] },
        { id: 26, title: "The Top Ski Resorts in Europe", excerpt: "Where to go for the best skiing experiences in Europe.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 27, title: "How to Harness AI in Your Business", excerpt: "Practical steps to integrate AI into your business model.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 28, title: "How to Survive a Recession", excerpt: "Strategies to keep your business afloat during tough times.", content: "Full content here...", category: "Business", comments: [] },
        { id: 29, title: "The Top Athletes to Watch in 2025", excerpt: "Who to watch in the next Olympics and beyond.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 30, title: "AI and the Future of Work", excerpt: "How AI will affect jobs and employment.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 31, title: "How to Build a Successful Startup", excerpt: "Steps to launch a successful startup business.", content: "Full content here...", category: "Business", comments: [] },
        { id: 32, title: "The 2025 Winter Sports Trends", excerpt: "What to expect in winter sports in 2025.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 33, title: "VR: The Next Big Thing in Tech", excerpt: "Virtual reality’s role in the future of technology.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 34, title: "Business Networking Strategies", excerpt: "How to expand your professional network in business.", content: "Full content here...", category: "Business", comments: [] },
        { id: 35, title: "The Best Winter Sports Gear", excerpt: "Top gear recommendations for winter sports enthusiasts.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 36, title: "Blockchain and Its Impact on Finance", excerpt: "How blockchain is transforming the financial sector.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 37, title: "The Future of Global Supply Chains", excerpt: "How technology is reshaping global supply chains.", content: "Full content here...", category: "Business", comments: [] },
        { id: 38, title: "Essential Winter Sports Training", excerpt: "Key workouts and training for winter athletes.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 39, title: "AI and Cybersecurity", excerpt: "How AI can help enhance cybersecurity practices.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 40, title: "Digital Marketing Trends in 2025", excerpt: "What’s next for digital marketing in 2025.", content: "Full content here...", category: "Business", comments: [] },
        { id: 41, title: "The Best Ski Resorts in North America", excerpt: "Top ski destinations in the U.S. and Canada.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 42, title: "How AI Will Shape the Future of Education", excerpt: "The role of AI in transforming education.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 43, title: "How to Fund Your Startup", excerpt: "Ways to raise money and fund your startup idea.", content: "Full content here...", category: "Business", comments: [] },
        { id: 44, title: "Top Winter Sports Athletes", excerpt: "Who to watch in winter sports competitions.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 45, title: "The Next Evolution of E-commerce", excerpt: "E-commerce trends and the future of online shopping.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 46, title: "How to Build a Personal Brand", excerpt: "Steps to create and grow your personal brand.", content: "Full content here...", category: "Business", comments: [] },
        { id: 47, title: "The Future of Olympic Sports", excerpt: "How Olympic sports are evolving for the future.", content: "Full content here...", category: "Sports", comments: [] },
        { id: 48, title: "The Impact of Artificial Intelligence on Business", excerpt: "How AI is changing business operations.", content: "Full content here...", category: "Technology", comments: [] },
        { id: 49, title: "Business Success in the Digital Age", excerpt: "What businesses need to thrive in the digital age.", content: "Full content here...", category: "Business", comments: [] },
        { id: 50, title: "Winter Sports for Beginners", excerpt: "An introduction to winter sports for beginners.", content: "Full content here...", category: "Sports", comments: [] }
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
