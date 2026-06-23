import {useQuery} from "@tanstack/react-query";
import ArticleService from "../../services/ArticleService.ts";
import {MySlider} from "../../ui/MySlider/MySlider.tsx";
import {useMapStore} from "../../../../store/MapStore.ts";
import {MyArticleTopContainer} from "../MyArticleTopContainer/MyArticleTopContainer.tsx";
import {MyArticleText} from "../MyArticleText/MyArticleText.tsx";

export function MyArticlePageContainer() {
  const {exhibitId} = useMapStore()
  const {data, error, isLoading} = useQuery({
    queryKey: [`get:article:by:${exhibitId}`],
    queryFn: async () => {
      return await ArticleService.getArticleByExhibitId(exhibitId)
    },
    enabled: exhibitId !== null,
  })

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    <div>Произошла ошибка</div>;
  }


  return (
    <>
      {data ?
        <>
          <MyArticleTopContainer
            title={"Бобры"}
            description={"Бобры"}
            audioUrl={data.audio}
            audioDescription={"ksdjfkjsdfjdsf"}
            content={data.content}
          />
          {
            data.content.map((content) => {
              if (content.type === "slider") {
                return <MySlider slides={content.images} />
              } else if (content.type === "text") {
                return <MyArticleText text={content.value} />
              }
            })
          }
        </>
        :
        <div>не удалось найти вас</div>
      }
    </>
  );
};


