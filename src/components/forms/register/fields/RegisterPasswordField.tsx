import { FC } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { RegisterFormFields } from "../../../../types/form-fields";
import inputStyles from "../../../../styles/input.module.scss";

type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};
export const RegisterPasswordField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="password">Password</label>
        </div>
        {error && <div className={inputStyles.inputError}>{error.message}</div>}
      </div>
      <input
        className={inputStyles.inputField}
        id="password"
        type="password"
        {...register("password", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "Max length is 32 characters",
          },
          minLength: {
            value: 8,
            message: "Min length is 8 characters",
          },
        })}
      />
    </div>
  );
};
