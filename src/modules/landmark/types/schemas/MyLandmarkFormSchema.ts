import {z} from "zod";

export const MyLandmarkFormSchema = z.object({
  currentLocation: z.string().min(1, {message: "Поле не может быть пустым"}),
  destination: z.string().min(1, {message: "Поле не может быть пустым"}),
});

export type MyLandmarkFormSchema = z.infer<typeof MyLandmarkFormSchema>;