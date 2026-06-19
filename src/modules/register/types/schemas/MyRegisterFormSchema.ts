import {z} from "zod";

export const MyRegisterFormSchema = z.object({
  email: z.string().min(1, {message: "Поле не может быть пустым"})
    .email({message: "Введите корректный email"}),
  password: z.string().min(8, {message: "Пароль должен быть не менее 8 символов"})
});

export type MyRegisterFormSchema = z.infer<typeof MyRegisterFormSchema>;