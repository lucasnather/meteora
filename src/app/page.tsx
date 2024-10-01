import { Banner } from "./components/Banner";
import { Ease } from "./components/Ease";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Newsletter } from "./components/Newsletter";
import { Products } from "./components/Products";
import { SearchCategory } from "./components/SearchCategory";
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <main className={styles.main}>
        <SearchCategory />
        <Products />
      </main>
      
      <Ease />
      <Newsletter />
      <Footer />
    </div>
  );
}
