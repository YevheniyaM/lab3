import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { articlesData } from "../data";
import "../style.css";
import "../reset.css";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Publication() {
  const query = useQuery();
  const articleId = query.get("id");
  const article = articlesData.find((a) => a.id === parseInt(articleId));

  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(
      localStorage.getItem("allComments") || "{}"
    );
    return savedComments[articleId] || [];
  });

  const [isLiked, setIsLiked] = useState(() => {
    const likedArticles =
      JSON.parse(localStorage.getItem("likedArticles")) || {};
    return !!likedArticles[articleId];
  });

  const handleToggleLike = () => {
    setIsLiked((prevIsLiked) => {
      const likedArticles =
        JSON.parse(localStorage.getItem("likedArticles")) || {};
      if (prevIsLiked) {
        delete likedArticles[articleId];
      } else {
        likedArticles[articleId] = true;
      }
      localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
      return !prevIsLiked;
    });
  };

  useEffect(() => {
    const allComments = JSON.parse(localStorage.getItem("allComments") || "{}");
    allComments[articleId] = comments;
    localStorage.setItem("allComments", JSON.stringify(allComments));
  }, [comments, articleId]);

  useEffect(() => {
    const likedArticles =
      JSON.parse(localStorage.getItem("likedArticles")) || {};
    setIsLiked(!!likedArticles[articleId]);
  }, [articleId]);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="wrapper">
      <main className="main-publication">
        <article className={`publication-container ${isLiked ? "liked" : ""}`}>
          <h1 className="publication-header">{article.title}</h1>
          <div className="publication-info">
            <figure className="publication-img">
              <img
                src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745412611/jx8iwwvdvyle3y0jm1s3.png"
                alt="Publication image about Japan travel"
              />
            </figure>
            <div className="publication-description">
              <p>
                I really love this trip, especially all the desserts I tried
                there. From the moment I arrived in Japan, I was captivated by
                its unique blend of tradition and modernity. But what truly won
                my heart was the incredible variety of sweets. Walking through
                the bustling streets of Tokyo, I discovered delicate wagashi,
                beautifully crafted traditional confections that reflect the
                seasons. The matcha-flavored mochi I had in Kyoto melted in my
                mouth, while the fluffy and airy Japanese cheesecake in Osaka
                was unlike anything I had ever tasted. One of my favorite
                experiences was visiting a tiny café in a quiet alley, where I
                tried dorayaki—soft pancakes filled with sweet red bean paste.
                And, of course, I couldn't leave without indulging in Hokkaido's
                famous creamy soft serve ice cream. Beyond the desserts, the
                entire trip felt like a dream. The peaceful atmosphere of
                ancient shrines, the neon-lit excitement of Shibuya, and the
                breathtaking beauty of Mount Fuji all made this journey
                unforgettable. Japan is a place where every moment feels
                special, and I can't wait to return.
              </p>
            </div>
          </div>
          <div className="publication-interactions">
            <div className="like-container">
              <input
                type="checkbox"
                id={`publicationLike${articleId}`}
                className="heart-checkbox"
                checked={isLiked}
                onChange={handleToggleLike}
              />
              <label
                htmlFor={`publicationLike${articleId}`}
                className="heart-label"
              >
                ♥
              </label>
            </div>
            <div className="comments-section">
              <h2 className="comments-title">Comments</h2>
              <CommentForm onAddComment={handleAddComment} />
              <CommentList comments={comments} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Publication;
