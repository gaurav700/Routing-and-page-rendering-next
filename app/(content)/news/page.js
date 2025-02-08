import { DUMMY_NEWS } from "@/util/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>New page</h1>
      <NewsList news={DUMMY_NEWS}/>
    </>
  );
}
