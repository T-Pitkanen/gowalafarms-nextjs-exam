import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Partners from "@/components/partners/partners";
import Services from "@/components/services/services";

export default function AboutPage() {
  const heroConfig = {
  
    headline: {
      text: "About Gowala Farms",
      color: "black",
    },
    backgroundImage: "/headers/page_header_01.jpg",
    underline: {
      text: ` Our story & mission `,
      color: "#5D9913",
    },
  };

  return (
    <div className={styles.page}>
      <Hero config={heroConfig} />
      <About />
      <Partners />
      <Services />
    </div>
  );
}
