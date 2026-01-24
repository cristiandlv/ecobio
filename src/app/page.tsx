import { Hero } from "@/sections/Hero";
import { FilosofiaEcobio } from "@/sections/FilosofiaEcobio";
import { FeaturedProducts } from "@/sections/FeaturedProducts";
import { HowToUse } from "@/sections/HowToUse";
import { ForBusinesses } from "@/sections/ForBusinesses";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FilosofiaEcobio />
      <FeaturedProducts />
      <HowToUse />
      <ForBusinesses />
      <Testimonials />
    </main>
  );
}
