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
      {!article? <p>Loading</p> :   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#B7C9D2] to-[#5D4B81] text-white">
      <div className="bg-gray-100 bg-opacity- text-gray-900 container flex flex-col items-center justify-center gap-12">
        <Link href="/">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow float-left mt-4 ml-4">
  Home
</button>
        </Link>
        <h2 className="mb-[30] text-3xl font-semibold text-gray-900">{article.title}</h2>
        <article className="p-2 flex flex-col items-center"> 
        <div className="p-2 flex flex-col text-left bg-gradient-to-b from-[#B7C9D2] to-[#5D4B81] md:rounded-s-lg">
        <img className="p-2 object-cover w-auto h-96 md:rounded-s-lg" src={article.article_img_url}/>
        <p>{article.topicName}</p>
        <p>{article.createdAt}</p>
        <VoteButton id={article.id} votes={article.votes}/>
        </div>
        </article>
        <section className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mb-5">
          <p className="bg-white shadow-lg rounded-lg py-3 px-5 ">
            {article.body}
          </p>
        </section>
      <Comments id={article.id}/>
      </div>
    </main>}


    </div>
  );
}
