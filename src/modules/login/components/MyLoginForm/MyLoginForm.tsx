import styles from "./style.module.css"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "react-router";
import {MyFormInput} from "../../../register/ui/MyFormInput/MyFormInput.tsx";
import {MyButton} from "../../../../ui/MyButton/MyButton.tsx";
import {MyRegisterFormSchema} from "../../../register/types/schemas/MyRegisterFormSchema.ts";

export function MyLoginForm() {
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
        <h1 className={styles.title}>Вход</h1>

        <p className={styles.text}>
          У меня есть аккаунт, я хочу{" "}
          <Link to="/register" className={styles.link}>
            зарегистрироваться
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