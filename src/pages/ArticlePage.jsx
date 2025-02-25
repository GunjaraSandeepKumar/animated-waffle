import React from "react";
import { useParams } from "react-router-dom";
import ArticleDetail from "./ArticleDetail";

const ArticlePage = ({ articles }) => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) return <div>Article not found</div>;

  return <ArticleDetail article={article} />;
};

export default ArticlePage;
