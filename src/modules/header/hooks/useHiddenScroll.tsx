import {useEffect} from "react";

type Props = {
  isShowMenu: boolean;
};

export function UseHiddenScroll({isShowMenu}: Props) {

  useEffect(() => {
    if (isShowMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isShowMenu]);
};