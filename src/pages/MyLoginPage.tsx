import {MyHeader} from "../modules/header";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";
import {MyLoginForm} from "../modules/login/components";

export function MyLoginPage() {
  return (
    <>
      <MyHeader/>
      <MyMainContainer>
        <MyLoginForm />
      </MyMainContainer>
    </>
  );
};