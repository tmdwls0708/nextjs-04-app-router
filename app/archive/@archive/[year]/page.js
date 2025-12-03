import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const { year } = params;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
