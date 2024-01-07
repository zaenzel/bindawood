import Hero from "@/components/hero/Hero";
import MarketPlace from "@/components/marketplace/MarketPlace";
import ListSosmed from "@/components/pages/contact/listSosmed/ListSosmed";
import Title from "@/components/title/Title";
import React from "react";

export const metadata = {
  title: "Kontak Madu Bindawood",
  description: "daftar kontak madu bindawood yang bisa dihubungi",
};

const Contact = () => {
   return (
    <div className="">
      <Hero image={"/images/hero/contact.png"} title={"Kontak"} />
      <div className="pt-10">
        <div className="flex flex-col items-center gap-20 py-10 px-5 md:px-12">
         <Title title={"Ikuti Kami di Sosial Media"} />
          <ListSosmed />
        </div>
        <MarketPlace />
      </div>
    </div>
  );
};

export default Contact;
