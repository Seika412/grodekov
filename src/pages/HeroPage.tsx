import {MyHeader} from "../modules/header";
import {MyHeroPageContainer} from "../modules/main";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";


export function HeroPage() {
  return (
    <>
      <MyHeader />
      <MyMainContainer>
        <MyHeroPageContainer/>
      </MyMainContainer>
    </>
  );
};