import {MySubtitle} from "../../../ui/MySubtitle/MySubtitle.tsx";
import {MyAdditionalList} from "./MyAdditionalList/MyAdditionalList.tsx";

export function MyAdditionalContainer() {

  return (
    <>
      <MySubtitle
        text={"Дополнительная информация для посетителей"}
        title={"Допонительно"}
      />
      <MyAdditionalList />
    </>
  );
};