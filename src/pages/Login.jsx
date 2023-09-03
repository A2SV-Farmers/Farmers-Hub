import { Link, NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.logIn}>
      <form action="/app" className={styles.loginChild}>
        <div className={styles.form}>
          <div className={styles.formItems}>
            <div className={styles.loginItem}>
              <label className={styles.label} htmlFor="username">
                User Name
              </label>
              <input autoComplete="off" name="username" id="username" />
            </div>

            <div className={styles.loginItem}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className={styles.submit}>
            <Link to="/index">
              <button className={styles.button}>Log In</button>
            </Link>

          </div>
        </div>
        <p className={styles.footer}>
          Create an account? <NavLink to="/app/signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
