import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { TLoginFormInputs } from "@/app/types/types";
import { useMotionValueEvent, useScroll } from "framer-motion";

// Хук для отслеживания ошибки ввода логин формы
export function useErrorStatus(errors: FieldErrors<TLoginFormInputs>) {
  const [statusMailError, setStatusMailError] = useState(false);
  const [statusPhoneError, setStatusPhoneError] = useState(false);
  const [statusPassError, setStatusPassError] = useState(false);
  useEffect(() => {
    setStatusMailError(true);
  }, [errors.mail]);
  useEffect(() => {
    setStatusPhoneError(true);
  }, [errors.phone]);
  useEffect(() => {
    setStatusPassError(true);
  }, [errors.pass]);
  return {
    statusMailError,
    statusPhoneError,
    statusPassError,
    setStatusMailError,
    setStatusPassError,
    setStatusPhoneError,
  };
}

// Хук для получения текущего пути
export const useAppPathName = (): string => {
  return usePathname();
};


export const useScrollPositionTop=()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsAtTop(true);
    }
    if (latest !== 0) {
      setIsAtTop(false);
    }
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return {action:toggleMenu, isAtTop:isAtTop}
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
