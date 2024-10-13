
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Code Reveals | Web Development | Software Development &amp; Digital Transformation Agency",
  description: "Code Reveals - your premier destination for comprehensive web development software and digital transformation solutions. Our expert team specializes in crafting bespoke strategies tailored to elevate your online presence and drive success in the digital realm. From cutting-edge website development to seamless digital transformations, we leverage the latest SEO techniques to ensure your brand shines brightly in search engine results. Trust us to optimize your website for maximum visibility, engage your target audience, and propel your business to new heights in the digital landscape. Partner with Code Reveals today and unlock the true potential of your online presence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={sora.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
