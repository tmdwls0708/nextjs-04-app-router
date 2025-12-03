import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

const FilteredNewsPage = ({ params }) => {
  // /archive/2024/3 같은 경로의 세그먼트가 여러개 중첩일 때 모두 걸린다.
  // archive 이후의 모든 세그먼트들을 배열로 가져온다. ex) ['2024', '3']
  const filter = params.filter;

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>{<Link href={`/archive/${link}`}>{link}</Link>}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(filter);

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
