import React from "react";
import NewsCard from "../../Components/NewsCard/NewsCard";
import "./newsMedia.css";

const NewsMedia = () => {
  return (
    <div className="news_media_pg">
      <div className="hero_news_media">
        <div className="hero_news_media_overlay">
          <h1>News & Blogs</h1>
        </div>
      </div>
      <div className="news_media_content">
        <h1>Blogs</h1>
        <div className="news_media_card_container">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className="news_media_content">
        <h1>News & Media</h1>
        <div className="news_media_card_container">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;
