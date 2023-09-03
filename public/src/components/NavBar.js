import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <div className={styles.navBarItems}>
      <img src="menu.svg" />
      <input type="text" />
      <div className={styles.icons}>
        <img src="cart.png" />
        <img src="bag.png" />
        <img src="user.png" />
      </div>
    </div>
  );
}

export default NavBar;
