import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/navbar/CustomNavbar";
import CustomFooter from "@/components/footer/CustomFooter";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Madu Bindawood",
  description: "Madu Murni untuk pengobatan tradisional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CustomNavbar />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
