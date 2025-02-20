"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { Comments } from "~/app/Comments";
import VoteButton from "~/app/VoteButton";
import { api } from "~/trpc/react";

// type ArticleData = {
//   id: number;
//     title: string;
//     topicName: string;
//     authorId: number;
//     body: string;
//     createdAt: string;
//     votes: number;
//     article_img_url: string;
// }

export default function Article() {

  const {id} = useParams()
  // const [isLoading, setIsLoading] = useState(true)

const formattedId = Number(id);
const {data} = api.article.getArticle.useQuery({id: formattedId})
const article = data;

  if(!article) {
    return <p>Loading</p> 
  }
  
  return (
    <div>
      {!article? <p>Loading</p> :   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Link href="/">Back Home</Link>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} width="500px" height="500px"/>
        <p>{article.createdAt}</p>
        <p>{article.topicName}</p>
        <p>{article.votes}</p>
        <section>
          <p>
            {article.body}
          </p>
        </section>
        <VoteButton id={article.id}/>
      <Comments id={article.id}/>
      </div>
    </main>}


    </div>
  );
}
