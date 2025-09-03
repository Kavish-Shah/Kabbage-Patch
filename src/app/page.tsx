import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <>
    <Header/>
    {/* left side of page */}
    <div className="w-1/2 flex flex-col items-center justify-center">
      <Hero/>
    </div>
    </>
  );
}
