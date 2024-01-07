import Hero from "@/components/hero/Hero";
import MarketPlace from "@/components/marketplace/MarketPlace";
import ListProducts from "@/components/pages/products/listProduct/ListProducts";
import Title from "@/components/title/Title";

export const metadata = {
  title: "Daftar Produk Madu Bindawood",
  description: "Produk - produk madu dan herbal",
};

const Products = () => {
  return (
    <div>
      <Hero image={"/images/hero/products.png"} title={"Daftar Produk"} />
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col gap-10 py-10 px-5 max-w-7xl">
          <Title title={"Madu"} />
          <ListProducts />
        </div>
        
      </div>
      <MarketPlace />
    </div>
  );
};

export default Products;
