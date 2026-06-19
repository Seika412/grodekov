import styles from "./style.module.css"
import {useForm} from "react-hook-form";
import {MySearchSelect} from "../../../../ui/MySearchSelect/MySearchSelect.tsx";
import {MyButton} from "../../../../ui/MyButton/MyButton.tsx";
import {MyLandmarkFormSchema} from "../../types/schemas/MyLandmarkFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {UseMyLandmarkChoiseForm} from "../../hooks/UseMyLandmarkChoiseForm.tsx";
import {useQuery} from "@tanstack/react-query";
import RouteService from "../../../routes/services/RouteService.ts";
import {toast} from "sonner";
import {type ChangeEvent, useEffect, useState} from "react";
import {useMapStore} from "../../../../store/MapStore.ts";
import {useNavigate} from "react-router";

export function MyLandMarkChoiseForm() {
  const [locationOptions, setLocationOptions] = useState<string[]>(['Текущее местоположение'])
  const [destinationOptions, setDestinationOptions] = useState<string[]>([])

  // temporery fields
  const [longitude, setLongitude] = useState<number>()
  const [latitude, setLatitude] = useState<number>()
  const {setFromLat, setFromLng, setFromLevel, setExhibitId, setIsFromMyLocation} = useMapStore()
  const navigate = useNavigate()

  const changeLatitude = (e: ChangeEvent<HTMLInputElement>) => {
    setLatitude(Number(e.target.value))
  }

  const changeLongitude = (e: ChangeEvent<HTMLInputElement>) => {
    setLongitude(Number(e.target.value))
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MyLandmarkFormSchema>({
    resolver: zodResolver(MyLandmarkFormSchema),
    defaultValues: {
      currentLocation: '',
      destination: '',
    },
  });

  const {data, error} = useQuery({
    queryKey: [`get:all:exhibits`],
    queryFn: async () => {
      return await RouteService.getAllRoutes()
    }
  })

  if (error) {
    toast.error("Не удалось загрузить маршруты. Попробуйте еще раз.")
  }

  useEffect(() => {
    if (data) {
      setLocationOptions(['Текущее местоположение', ...data.map(route => route.name)])
      setDestinationOptions(data.map(route => route.name))
    }
  }, [data])

  const currentLocation = watch("currentLocation")
  const {onSubmit} = UseMyLandmarkChoiseForm({currentLocation})

  return (
    <form onSubmit={handleSubmit((submitData) => onSubmit(submitData, data || []))} className={styles.formContainer}>
      <div className={styles.inputWrapper}>
        <MySearchSelect
          name="currentLocation"
          placeholder="От куда"
          options={locationOptions}
          register={register}
          setValue={setValue}
          watch={watch}
          error={errors.currentLocation?.message || ""}
        />
        <MySearchSelect
          name="destination"
          placeholder="Куда идем"
          options={destinationOptions}
          register={register}
          setValue={setValue}
          watch={watch}
          error={errors.destination?.message || ""}
          customClass={styles.inputWhite}
        />
      </div>

      <MyButton onClick={() => {}}>
        Идем
      </MyButton>

      <div>
        <label>
          latitude
          <input value={latitude} onChange={changeLatitude} />
        </label>
        <label>
          longitude
        <input
          value={longitude} onChange={changeLongitude} />
        </label>

        <button type="button" onClick={() => {
          toast.success(`Идем из: ${latitude} в: Бобры`);
          setFromLat(String(latitude));
          setFromLng(String(longitude));
          setIsFromMyLocation(true)
          setFromLevel(1);
          setExhibitId(1);
          navigate(`/routes/:context/map`)

        }}>Кликни</button>
      </div>
    </form>
  );
};