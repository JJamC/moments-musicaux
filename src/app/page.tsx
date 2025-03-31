import { HydrateClient } from "~/trpc/server";
import MainPage from "./MainPage";
import Header from "./Header";

export default async function Home() {


  return (
    <HydrateClient>
      <div className="flex flex-col items-left justify-left bg-gradient-to-b from-[#9B86B5] to-[#3A1D55] text-white bg-opacity-40 ">
      <Header/>
      </div>
      <main className="min-h-screen items-center justify-center bg-gradient-to-b from-[#B7C9D2] to-[#5D4B81] text-[#3A3A3A]
 gap-12 px-4 py-16">
          <MainPage/>
      </main>
    </HydrateClient>
  );
}
