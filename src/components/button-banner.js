import Image from "next/image";
import Link from "next/link";

export default function ButtonBanner() {
  return (
    <div className="flex flex-row space-x-5 mt-10 mb-6 pl-9 justify-center">
      <Link href="/">
        <button className="border-white border-2 text-lg p-3 rounded-sm bg-gray-100 hover:bg-gray-100 bg-opacity-50">
          Main Page
        </button>
      </Link>
      <Link href="/projects">
        <button className="border-white border-2 text-lg p-3 rounded-sm bg-gray-100 hover:bg-gray-100 bg-opacity-50">
          Projects
        </button>
      </Link>
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
  );
}
