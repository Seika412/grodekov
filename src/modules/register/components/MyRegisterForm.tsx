import styles from "./style.module.css"
import {useForm} from "react-hook-form";
import {MyRegisterFormSchema} from "../types/schemas/MyRegisterFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {MyButton} from "../../../ui/MyButton/MyButton.tsx";
import {MyFormInput} from "../ui/MyFormInput/MyFormInput.tsx";
import {Link} from "react-router";

export function MyRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(MyRegisterFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: MyRegisterFormSchema) => {
    console.log("Данные регистрации:", data);
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Регистрация</h1>

        <p className={styles.loginText}>
          У меня есть аккаунт, я хочу{" "}
          <Link to="/login" className={styles.loginLink}>
            войти
          </Link>
        </p>

        <MyFormInput
          name={"email"}
          placeholder={"Введите почту"}
          type={"email"}
          register={register}
          error={errors.email?.message}
        />

        <MyFormInput
          name={"password"}
          placeholder={"Пароль"}
          type={"text"}
          register={register}
          error={errors.password?.message}
        />

        <MyButton
          onClick={() => {}}
        >
          Зарегистрироваться
        </MyButton>
      </form>
    </div>
  );
};