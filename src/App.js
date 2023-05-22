import { useEffect, useState } from "react";
import React from "react";
import MainLayouts from "./components/main.layouts";
import "./service/api";
import { getBerita } from "./service/api";
import "./App.css";


function App() {
  const [news, setBerita] = useState([]);
  useEffect(() => {
    getBerita().then((ress) => {
      setBerita(ress.articles);
    });
  }, []);
  
  return (
    <>
      <MainLayouts>
        <div className="container">
          <h1>Breaking news</h1>
          <div className="news-grid">
            {news.map((article) => (
              <div className="news-card" key={article.id}>
                <img
                  className="image"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <div className="content">
                  <h2 className="title">{article.title}</h2>
                  <p className="description">{article.description}</p>
                  <p className="published-at">{article.publishedAt}</p>
                  <a
                    className="read-more"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2023 @DianaBloggers. All rights reserved.</p>
        </div>
      </MainLayouts>
    </>
  );
}
export default App;
