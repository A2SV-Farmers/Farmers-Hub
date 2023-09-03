import styles from "./ProductItem.module.css";

function ProductItem() {
  return (
    <div className={styles.product}>
      <img src="wheat-2@2x.png" />
      <div className={styles.info}>
        <h2>Emmer wheat(Triticum Dicoccum)</h2>
        <p>$4</p>
        <p>10 Kg</p>
        <p>
          4.5 <span>***</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
