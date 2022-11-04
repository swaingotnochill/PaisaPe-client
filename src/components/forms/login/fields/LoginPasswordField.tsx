import styles from "../../../../styles/input.module.scss";
export const LoginPasswordField = () => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputContainerHeader}>
                <div className={styles.inputLabel}>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <input className={styles.inputField} id="password" type="password" />
        </div>
    );
}