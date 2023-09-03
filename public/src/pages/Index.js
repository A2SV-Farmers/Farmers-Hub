import NavBar from "../components/NavBar";
import styles from "./Index.module.css";
import ProductItem from "../components/ProductItem";

const App1 = () => {
  return (
    <div className={styles.index}>
      <div className={styles.appContent}>
        <NavBar />
        <div className={styles.productContainer}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default App1;
