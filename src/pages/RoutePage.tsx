import {MyHeader} from "../modules/header";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";
import {MyRoutePageContainer} from "../modules/route-description";

export function RoutePage() {
  return (
    <>
      <MyHeader />
      <MyMainContainer>
        <MyRoutePageContainer />
      </MyMainContainer>
    </>
  );
};