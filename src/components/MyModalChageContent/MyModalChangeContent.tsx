import {MyContextContainer} from "../../modules/context";
import {ModalTypeEnum} from "../../types/ModalTypeEnum.ts";
import {MyAllRoutesPageContainer} from "../../modules/routes";
import {useGlobalStore} from "../../store/GlobalStore.ts";
import {MyGameContainer} from "../../modules/game";
import {MyAdditionalContainer} from "../../modules/additional";
import {MyEventContainer} from "../../modules/events";

type Props = {
  type: ModalTypeEnum;
};

export function MyModalChangeContent({type}: Props) {
  const {contextId} = useGlobalStore()

  if (type === ModalTypeEnum.context) {
    return <MyContextContainer />
  }

  if (type === ModalTypeEnum.events) {
    return <MyEventContainer />
  }

  if (type === ModalTypeEnum.additional) {
    return <MyAdditionalContainer />
  }

  if (type === ModalTypeEnum.game) {
    return <MyGameContainer />
  }

  if (type === ModalTypeEnum.routes) {
    return contextId ?
      <MyAllRoutesPageContainer contextId={contextId} />
      :
      <div>Не удалось найти пути к данному контексту</div>
  }
}