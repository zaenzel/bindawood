import Hero from "@/components/pages/home/hero/Hero";
import Products from "@/components/pages/home/products/Products";
import WhoUs from "@/components/pages/home/whoUs/WhoUs";
import WhyUs from "@/components/pages/home/whyUs/WhyUs";
import MarketPlace from "@/components/marketplace/MarketPlace";
import Video from "@/components/pages/home/video/Video";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhoUs />
      <Products />
      <WhyUs />
      <Video />
      <MarketPlace />
    </main>
  );
}
