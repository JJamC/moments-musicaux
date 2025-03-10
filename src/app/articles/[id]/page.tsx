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
      {!article? <p>Loading</p> :   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-400 to-teal-800 text-white">
      <div className="bg-gray-100 bg-opacity-85 text-gray-900 container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Link href="/">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow float-left mt-4 ml-4">
  Home
</button>
        </Link>
        <h2 className="text-3xl font-semibold text-gray-900">{article.title}</h2>
        <img className="object-cover object-center w-full rounded-lg h-96" src={article.article_img_url}/>
        <div className="flex justify-between justify-evenly w-full">
        <p>{article.topicName}</p>
        <p>{article.createdAt}</p>
        <VoteButton id={article.id} votes={article.votes}/>
        </div>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <p className="mt-4 text-lg leading-relaxed text-gray-900">
            {article.body}
          </p>
        </section>
      <Comments id={article.id}/>
      </div>
    </main>}


    </div>
  );
}
