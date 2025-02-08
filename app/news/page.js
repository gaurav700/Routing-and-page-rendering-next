import Link from "next/link";
import { DUMMY_NEWS } from "@/util/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>New page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}><img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            <span>{newsItem.title}</span></Link>
          </li>
        ) )}
      </ul>
    </>
  );
}
