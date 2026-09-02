import Image from "next/image";
import { membersData } from "../data/membersData";
import { MembersCard } from "../components/MembersCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white mx-auto">
      <main className="flex flex-1 w-full  flex-col items-center justify-between py-32 px-16 sm:items-start">
       <div className="grid grid-cols-[repeat(auto-fit,minmax(420px,1fr))] xl:grid-cols-3 gap-8">
         {membersData.map((member) => (
          <MembersCard key={member.id} {...member} />
        ))}</div>

      </main>
    </div>
  );
}
