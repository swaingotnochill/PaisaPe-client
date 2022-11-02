import { FC } from "react";
import { RegisterFormFields } from "../../../../types/form-fields";
import { UseFormRegister, FieldError } from "react-hook-form";
import inputStyles from "../../../../styles/input.module.scss";
type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};

export const FirstNameField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="firstName"> First Name</label>
        </div>
        {error && <div className={inputStyles.inputError}>{error.message}</div>}
      </div>
      <input
        className={inputStyles.inputField}
        id="firstName"
        {...register("firstName", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "Max length is 32 characters",
          },
          minLength: {
            value: 2,
            message: "Min length is 2 characters",
          },
        })}
      />
    </div>
  );
};
