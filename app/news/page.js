import Link from "next/link";


const NewsPage = () => {
  return (
    <>
    <h1>New page</h1>
    <ul>
        <li>
            <Link href="/news/1">First link</Link>
        </li>
        <li>
            <Link href="/news/2">Second link</Link>
        </li>
        <li>
            <Link href="/news/3">Third link</Link>
        </li>
    </ul>
    </>
  );
};

export default NewsPage;
