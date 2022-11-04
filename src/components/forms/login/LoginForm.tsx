import { Button } from "../../button/Button";
import styles from "../../../styles/forms.module.scss";
import { LoginUsernameField } from "./fields/LoginUsernameField";
import { LoginPasswordField } from "./fields/LoginPasswordField";
export const LoginForm = () => {
  return (
    <form className={styles.form}>
      <LoginUsernameField />
      <LoginPasswordField />
      <Button className={styles.button}>Login</Button>
    </form>
  );
};
