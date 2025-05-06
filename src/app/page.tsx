import { GithubIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4 text-center">
      <h1 className="text-4xl font-bold">Vadim Alexeev, Full Stack Web Developer.</h1>
      <h2 className="text-2xl">
        Building <a href="https://worldledger.co.uk" target="_blank" className="underline">World Ledger</a>, a news platform for the 21st century.
      </h2>
      <h3 className="text-xl font-mono">
        Find me on <a href="https://github.com/VadimAlexeev0" target="_blank" rel="noopener noreferrer" className="underline">Github</a>
        {` `}
        and <a href="https://www.linkedin.com/in/vadim0" target="_blank" rel="noopener noreferrer" className="underline">Linkedin</a>.
      </h3>
      <div className="px-4 rounded-lg overflow-hidden">
        {/* <Image src="/meme.jpg" alt="Funny meme" width={500} height={500} className="rounded-lg" /> */}
      </div>
    </main>
  );
}
