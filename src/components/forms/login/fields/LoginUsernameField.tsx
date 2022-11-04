import styles from "../../../../styles/input.module.scss";
export const LoginUsernameField = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerHeader}>
        <div className={styles.inputLabel}>
          <label htmlFor="username">Username</label>
        </div>
      </div>
      <input className={styles.inputField} id="username" />
    </div>
  );
};
