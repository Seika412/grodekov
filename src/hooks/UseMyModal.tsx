import {type MouseEvent, useCallback, useRef, useState} from "react";
import {useGlobalStore} from "../store/GlobalStore.ts";
import type {TouchEvent} from "react";

const MIN_HEIGHT_VH = 30;
const MAX_HEIGHT_VH = 94;
const DEFAULT_HEIGHT_VH = 80;
const CLOSE_THRESHOLD_VH = 20;

export function UseMyModal() {
  const { setShowModal } = useGlobalStore();

  const [heightVh, setHeightVh] = useState(DEFAULT_HEIGHT_VH);
  const [isDragging, setIsDragging] = useState(false);

  const dragData = useRef({
    startY: 0,
    startHeightVh: DEFAULT_HEIGHT_VH,
  });

  const onTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    dragData.current.startY = touch.clientY;
    dragData.current.startHeightVh = heightVh;
    setIsDragging(true);
  }, [heightVh]);

  const onTouchMove = useCallback((e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaY = dragData.current.startY - touch.clientY;
    const deltaVh = (deltaY / window.innerHeight) * 100;

    const newHeight = Math.min(
      MAX_HEIGHT_VH,
      Math.max(MIN_HEIGHT_VH, dragData.current.startHeightVh + deltaVh)
    );

    setHeightVh(newHeight);
  }, [isDragging]);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);

    if (heightVh < CLOSE_THRESHOLD_VH) {
      setShowModal(false);
      setHeightVh(DEFAULT_HEIGHT_VH);
    }
  }, [heightVh, setShowModal]);

  const onMouseDownHandle = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragData.current.startY = e.clientY;
    dragData.current.startHeightVh = heightVh;
    setIsDragging(true);

    const onMouseMove = (ev: globalThis.MouseEvent) => {
      const deltaY = dragData.current.startY - ev.clientY;
      const deltaVh = (deltaY / window.innerHeight) * 100;

      const newHeight = Math.min(
        MAX_HEIGHT_VH,
        Math.max(MIN_HEIGHT_VH, dragData.current.startHeightVh + deltaVh)
      );
      setHeightVh(newHeight);
    };

    const onMouseUp = () => {
      setIsDragging(false);
      setHeightVh((prev) => {
        if (prev < CLOSE_THRESHOLD_VH) {
          setShowModal(false);
          return DEFAULT_HEIGHT_VH;
        }
        return prev;
      });
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, [heightVh, setShowModal]);

  const onCloseModal = () => {
    setShowModal(false);
    setHeightVh(DEFAULT_HEIGHT_VH);
  };
  return {
    onCloseModal,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDownHandle,
    isDragging,
    heightVh
  }
};