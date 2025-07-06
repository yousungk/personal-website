import Image from "next/image";
import Link from "next/link";
import ButtonBanner from "@/components/button-banner";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col place-content-center justify-center items-center min-h-screen">
        <div className="text-5xl pb-6 font-bold">Yousung (Ally) Kim</div>
        <div className="text-xl w-1/2">
          <div className="font-bold inline-flex">Backend developer</div> based
          in NYC with a dual background in{" "}
          <div className="font-bold inline-flex">finance</div> and{" "}
          <div className="font-bold inline-flex">computer science</div>,
          specializing in building{" "}
          <div className="font-bold inline-flex">distributed systems</div> that
          power <div className="font-bold inline-flex">trading</div> and{" "}
          <div className="font-bold inline-flex">
            quantitative investment strategies
          </div>
          .
        </div>
        <ButtonBanner />
      </div>
    </main>
  );
}
