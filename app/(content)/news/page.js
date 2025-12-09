"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/news");
      if (!res.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }
      const news = await res.json();
      setIsLoading(false);
      setNews(news);
    })();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  let newContent;
  if (news) {
    newContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newContent}
    </>
  );
};

export default NewsPage;
