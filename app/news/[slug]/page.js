import { DUMMY_NEWS } from "@/util/dummy-news";
export default function IdPage({ params }) {
  console.log("-------------");

  console.log(params.slug);
  const slug = params.slug;
  console.log("-------------");
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  console.log("-------------");

  console.log("new item is "+newsItem);
  console.log("-------------");

  return (
    <article className="news-article">
      <header>
        <img  src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
