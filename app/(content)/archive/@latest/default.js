import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = async () => {
  const news = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
};

export default LatestNewsPage;
