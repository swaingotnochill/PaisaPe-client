import { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
