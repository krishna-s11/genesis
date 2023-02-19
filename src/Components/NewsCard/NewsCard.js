import React from "react";
import "./newsCard.css";
import img1 from "../../Assets/newscard.jpeg";

const NewsCard = () => {
  return (
    <div className="news_card">
      <img src={img1} alt="" srcset="" />
      <div className="news_card_content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Proin vitae nunc efficitur, interdum nulla at, blandit felis. Ut
          pellentesque finibus felis, at tincidunt diam aliquet sit amet. In vel
          varius nisl.
        </p>
        <p className="news_card_btn">Read more -{">"}</p>
      </div>
    </div>
  );
};

export default NewsCard;
