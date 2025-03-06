import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import MainPage from "./MainPage";
import Header from "./Header";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <Header/>
          <MainPage/>
        </div>
      </main>
    </HydrateClient>
  );
}
