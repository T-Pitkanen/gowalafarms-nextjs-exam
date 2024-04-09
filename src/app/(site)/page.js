import styles from "./page.module.css";
import Carousel from "@/components/carousel/carousel";
import Services from "@/components/services/services";
import Products from "@/components/products/products";
import Team from "@/components/team/team";
import Subscribe from "@/components/subscribe/subscribe";
import Partners from "@/components/partners/partners";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      <Carousel />

      <Services />
      <div className={styles.products}>
        <h1>Our Products</h1>
        <h2>We Provided the Best Products</h2>
        <p>
          Continually productize compelling quality for packed with Elated
          Themes Setting up to website and it crating pages .
        </p>
      </div>
      <Products exclusive={true} />
      <Team />
      <Subscribe />
      <Partners />
    </div>
  );
}
