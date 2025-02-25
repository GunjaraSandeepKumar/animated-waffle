import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();  // Get the article ID from the URL
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Simulate fetching article details by ID (you could replace this with an API call)
    const fetchedArticles = [
      { id: 1, title: "Breaking News: React Updates", content: "Full content of React updates.", category: "Technology", comments: ["Amazing!", "Great update!"] },
      { id: 2, title: "Business Trends in 2025", content: "Full content on Business Trends.", category: "Business", comments: [] },
      { id: 3, title: "Sports Highlights: Winter Olympics", content: "Olympics full recap.", category: "Sports", comments: [] },
      { id: 4, title: "How AI is Changing the World", content: "Full content about AI.", category: "Technology", comments: [] },
      { id: 5, title: "Top 10 Business Startups", content: "Startups content here.", category: "Business", comments: [] },
    ];

    // Find the article with the matching ID
    const articleData = fetchedArticles.find((article) => article.id === parseInt(id));
    setArticle(articleData);
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;  // Show loading while fetching article data
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-black dark:text-white">{article.title}</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{article.content}</p>
        <div className="mt-6">
          <h3 className="text-xl text-gray-800 dark:text-gray-200">Comments</h3>
          {article.comments.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No comments yet.</p>
          ) : (
            <ul className="list-disc pl-5">
              {article.comments.map((comment, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{comment}</li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ArticleDetail;
