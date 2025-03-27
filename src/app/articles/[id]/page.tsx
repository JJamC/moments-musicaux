"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { Comments } from "~/app/Comments";
import VoteButton from "~/app/VoteButton";
import { api } from "~/trpc/react";

export default function Article() {

  const {id} = useParams()


const formattedId = Number(id);
const {data: article} = api.article.getArticle.useQuery({id: formattedId})


  if(!article) {
    return <p>Loading</p> 
  }
  
  return (
    <div>
      {!article? <p>Loading</p> :   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ff7e5f] to-[#feb47b] text-white">
      <div className="bg-gray-100 bg-opacity-65 text-gray-900 container flex flex-col items-center justify-center gap-12">
        <Link href="/">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow float-left mt-4 ml-4">
  Home
</button>
        </Link>
        <h2 className="mb-[30] text-3xl font-semibold text-gray-900">{article.title}</h2>
        <article className="p-2 flex flex-col items-center"> 
        <img className="p-2 object-cover object-center w-auto rounded-lg h-96" src={article.article_img_url}/>
        <div className="p-2 flex flex-col text-left w-full">
        <p>{article.topicName}</p>
        <p>{article.createdAt}</p>
        <VoteButton id={article.id} votes={article.votes}/>
        </div>
        </article>
          <p className="bg-white shadow-lg rounded-lg p-2">
            {article.body}
          </p>
      <Comments id={article.id}/>
      </div>
    </main>}


    </div>
  );
}
