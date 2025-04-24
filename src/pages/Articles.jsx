import React, { useState, useEffect } from "react";
import { articlesData } from "../data";
import Article from "../components/Article";
import "../style.css";
import "../reset.css";
import SearchBar from "../components/SearchBar";

function Articles() {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("likedArticles");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("likedArticles", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = {
        ...prevLikes,
        [id]: !prevLikes[id],
      };
      localStorage.setItem("likedArticles", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  // Сортування статей за датою
  const sortedArticles = [...articlesData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Фільтрація статей за пошуковим запитом
  const filteredArticles = sortedArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wrapper">
      <main className="main-articles">
        <h1 className="main-heading">Articles</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <section className="section-articles">
          <ul className="articles">
            {filteredArticles.map((article) => (
              <Article
                key={article.id}
                article={article}
                isLiked={likes[article.id] || false}
                onToggleLike={toggleLike}
              />
            ))}
          </ul>
          <div className="learn-about">
            <a href="#">Learn about others</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Articles;
