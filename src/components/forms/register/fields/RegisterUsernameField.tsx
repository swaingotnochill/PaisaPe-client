import { RegisterFormFields } from "../../../../types/form-fields";
import { UseFormRegister, FieldError } from "react-hook-form";
import inputStyles from "../../../../styles/input.module.scss";
import { FC } from "react";

type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};
export const RegisterUsernameField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="username">Username</label>
        </div>
        {error && (
          <div className={inputStyles.inputError}> {error.message} </div>
        )}
      </div>
      <input
        className={inputStyles.inputField}
        id="username"
        {...register("username", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "Max length is 32 characters",
          },
          minLength: {
            value: 4,
            message: "Min length is 4 characters",
          },
        })}
      />
    </div>
  );
};
