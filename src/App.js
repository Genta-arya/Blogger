import { useEffect, useState } from "react";
import React from "react";
import MainLayouts from "./components/main.layouts";
import "./service/api";
import { getBerita } from "./service/api";

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
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Breaking News</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <div className="bg-white shadow rounded-lg overflow-hidden" key={article.id}>
                <img
                  className="w-full h-48 object-cover"
                  src={article.urlToImage || "https://via.placeholder.com/400"}
                  alt={article.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400";
                  }}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">{article.publishedAt}</p>
                    <a
                      className="text-blue-500 font-semibold hover:text-blue-700"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <p className="text-gray-500">&copy; 2023 @DianaBloggers. All rights reserved.</p>
          </div>
        </div>
      </MainLayouts>
    </>
  );
}

export default App;
