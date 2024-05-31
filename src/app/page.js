import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col place-content-center justify-center items-center min-h-screen">
        <div className="text-5xl pb-6 font-bold">Yousung (Ally) Kim</div>
        <div className="text-xl">
          Full-stack developer with experience in business and data analytics.
        </div>
        <div className="text-xl">
          Computer science masters's student at the University of Pennsylvania.
        </div>
        <div className="flex flex-row space-x-5 pt-6">
          <Link href="/resume">
            <button className="border-white border-2 text-lg p-3 rounded-sm bg-gray-100 hover:bg-gray-100 bg-opacity-50">
              Resume
            </button>
          </Link>
          <button className="border-white border-2 text-lg p-3 rounded-sm bg-gray-100 hover:bg-gray-100 bg-opacity-50">
            <a
              href="https://github.com/yousungk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
          <button className="border-white border-2 text-lg p-3 rounded-sm bg-gray-100 hover:bg-gray-100 bg-opacity-50">
            <a
              href="https://www.linkedin.com/in/allykim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
