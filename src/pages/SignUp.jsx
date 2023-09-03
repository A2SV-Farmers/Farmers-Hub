import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
const SignUp = () => {
  return (
    <form className={styles.signUpChild}>
      <div className={styles.form}>
        <div className={styles.formItems}>
          <div className={styles.signUpItem}>
            <label className={styles.label} htmlFor="username">
              User Name
            </label>
            <input autoComplete="off" name="username" id="username" />
          </div>
          <div className={styles.signUpItem}>
            <label className={styles.label} htmlFor="phone">
              Phone
            </label>
            <input name="phone" id="phone" />
          </div>
          <div className={styles.signUpItem}>
            <label className={styles.label} htmlFor="region">
              Region
            </label>
            <input name="region" id="region" />
          </div>
          <div className={styles.signUpItem}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={styles.signUpItem}>
            <label className={styles.label} htmlFor="conf-password">
              Password
            </label>
            <input type="password" name="password" id="conf-password" />
          </div>
        </div>
        <div className={styles.submit}>
        <Link to="/index">
          <button className={styles.button}>Sign Up</button>
          </Link>
        </div>
      </div>
      <p className={styles.footer}>
        Already have an account? <Link to="/app/login">Login</Link>
      </p>
    </form>
  );
};

export default SignUp;
