import styles from "../../../styles/forms.module.scss";
import { Button } from "../../button/Button";
import { useForm } from "react-hook-form";
import { RegisterFormFields } from "../../../types/form-fields";
import { FirstNameField } from "./fields/FirstNameField";
import { LastNameField } from "./fields/LastNameField";
import { RegisterUsernameField } from "./fields/RegisterUsernameField";
import { RegisterPasswordField } from "./fields/RegisterPasswordField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Required")
      .min(8, "Min length is 8 characters")
      .max(32, "Max length is 32 characters")
      .test(
        "passwordRequirements",
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
        (value: any) =>
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          )
      ),
    username: Yup.string()
      .required("Required")
      .min(3, "Min length is 3")
      .max(16, "Max length is 16"),
    firstName: Yup.string()
      .required("Required")
      .min(2, "Min length is 2")
      .max(32, "Max length is 32"),
    lastName: Yup.string()
      .required("Required")
      .min(2, "Min length is 2")
      .max(32, "Max length is 32"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameContainer}>
        <FirstNameField register={register} error={errors.firstName} />
        <LastNameField register={register} error={errors.lastName} />
      </div>
      <RegisterUsernameField register={register} error={errors.username} />
      <RegisterPasswordField register={register} error={errors.password} />
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
