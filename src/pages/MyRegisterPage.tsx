import {MyHeader} from "../modules/header";
import {MyMainContainer} from "../components/MyMainContainer/MyMainContainer.tsx";
import {MyRegisterForm} from "../modules/register/components/MyRegisterForm.tsx";

export function MyRegisterPage() {
  return (
    <>
      <MyHeader />
      <MyMainContainer>
        <MyRegisterForm />
      </MyMainContainer>
    </>
  );
};