import Image from "next/image";
import Hero from "./components/Hero";
import Product from "./components/Product";
import BackgroundHero from "./components/BackgroundHero";

export default function Home() {
  return (
    <>
      <BackgroundHero />
      <Product />
    </>
  );
}
