import {MyArticlePageContainer} from "../modules/article/components/MyArticlePageContainer/MyArticlePageContainer.tsx";
import {MyHeader} from "../modules/header";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";

export function ArticlePage() {
  return (
    <>
      <MyHeader />
      <MyMainContainer>
        <MyArticlePageContainer />
      </MyMainContainer>
    </>
  );
};