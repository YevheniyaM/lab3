import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function Article({ article, onToggleLike, likes }) {
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const likedArticles =
      JSON.parse(localStorage.getItem("likedArticles")) || {};
    setIsLiked(!!likedArticles[article.id]);
  }, [article.id, likes]);

  const handleToggleLike = (event) => {
    event.stopPropagation();
    onToggleLike(article.id);
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <li className={`article ${isLiked ? "liked" : ""}`}>
      <div className="heart-container">
        <input
          type="checkbox"
          id={`heart${article.id}`}
          className="heart-checkbox"
          checked={isLiked}
          onChange={handleToggleLike}
        />
        <label htmlFor={`heart${article.id}`} className="heart-label">
          ♥
        </label>
      </div>
      <Link to={`/publication?id=${article.id}`}>
        <article className="article-content">
          <div className="article-info">
            <h2 className="article-header">{article.title}</h2>
            <p className="arcticle-description">{article.description}</p>
            <p className="article-other">{article.other}</p>
          </div>
        </article>
        <time className="article-date" dateTime={article.date}>
          {new Date(article.date).toLocaleDateString()}
        </time>
      </Link>
    </li>
  );
}

export default Article;
