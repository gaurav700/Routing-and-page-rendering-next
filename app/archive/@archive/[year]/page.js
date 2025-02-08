import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilterPageNews({params}){
    const year = params.year;
    return <NewsList news = {getNewsForYear(year)}/>
}