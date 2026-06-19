import styles from "./style.module.css"
import {MyRegisterFormSchema} from "../../types/schemas/MyRegisterFormSchema.ts";
import type {UseFormRegister} from "react-hook-form";

type Props = {
  name: "email" | "password";
  placeholder: string;
  type?: "text" | "email" | "password";
  register: UseFormRegister<MyRegisterFormSchema>;
  error?: string;
  customClass?: string;
};

export function MyFormInput({ name, type = "text", placeholder, register, error, customClass }: Props) {
  return (
    <div>
      <input
        className={`${styles.input} ${customClass ?? ""}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
}