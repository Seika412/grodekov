import {useQuery} from "@tanstack/react-query";
import ArticleService from "../../services/ArticleService.ts";
import {MyArticleTopContainer} from "../MyArticleTopContainer/MyArticleTopContainer.tsx";
import {MySlider} from "../../ui/MySlider/MySlider.tsx";

const slides = [
  { id: 1, image: 'https://avatars.mds.yandex.net/i?id=15bfbb52942b56f8ff992b86279dd133_l-12490006-images-thumbs&n=13' },
  { id: 2, image: 'https://avatars.mds.yandex.net/i?id=15bfbb52942b56f8ff992b86279dd133_l-12490006-images-thumbs&n=13' },
  { id: 3, image: 'https://avatars.mds.yandex.net/i?id=15bfbb52942b56f8ff992b86279dd133_l-12490006-images-thumbs&n=13' },
  { id: 4, image: 'https://avatars.mds.yandex.net/i?id=15bfbb52942b56f8ff992b86279dd133_l-12490006-images-thumbs&n=13' },
];

export function MyArticlePageContainer() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["get:article:by:id"],
    queryFn: async () => {
      return await ArticleService.getArticleByArticleId(1)
    }
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
            title={data.title}
            description={data.description}
            audioUrl={data.audio_link}
            audioDescription={data.audio_description}
          />
         <MySlider slides={slides} />
        </>
        :
        <div>не удалось найти вас</div>
      }
    </>
  );
};


