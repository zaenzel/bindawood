import Hero from "@/components/hero/Hero";
import MarketPlace from "@/components/marketplace/MarketPlace";
import Value from "@/components/pages/about/value/Value";
import Description from "@/components/text/Description";
import Title from "@/components/title/Title";
import { shortHistory } from "@/helper";
import React from "react";

export const metadata = {
  title: "Sejarah Madu Bindawood",
  description: "sejarah madu bindawood dan prinsip nilai perusahaan",
};

const About = () => {
  return (
    <div>
      <Hero image={"/images/hero/team.jpg"} title={"Tentang Bin Dawood"} />

      <div className="flex justify-center">
        <div
          className="flex flex-col gap-10 
          justify-center items-center text-center
          py-16 px-5 max-w-3xl"
        >
          <Title title={"Sejarah Singkat"} />
          <Description text={shortHistory} />
        </div>
      </div>

      <Value />

      <MarketPlace />
    </div>
  );
};

export default About;
