"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import InputMask from "react-input-mask";
import { TLoginFormInputs } from "../../types/types";
import { useErrorStatus } from "../../store/hooks/hooks";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

export default function Common() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>(); // Хук для работы с формой

  const {
    statusMailError,
    statusPhoneError,
    statusPassError,
    setStatusMailError,
    setStatusPassError,
    setStatusPhoneError,
  } = useErrorStatus(errors); // Хук для отслеживания ошибки ввода в поля инпут

  const onSubmit = (data: TLoginFormInputs) => {
    Cookies.set('phone', data.phone, { expires: 30 }); // Cookie expires in 30 days
    router.push('/common/profile')
    
    // можно добавить логику для обработки данных формы, например, отправку на сервер
  };

  const router = useRouter()

  return (
    <main className={styles.page__container}>
      <section className={styles.page__container_enter}>
        <h1>Вход</h1>

        <form
          className={styles.container__enter_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <article className={styles.center__form_item}>
            <label className={styles.form__item_label} htmlFor="phone">Телефон</label>
            <InputMask
            className={styles.form__item_input}
              id="phone"
              mask="+7 (999) 999-99-99"
              {...register("phone", {
                required: "Телефон обязателен",
                onChange: () => {
                  setStatusPhoneError(false);
                },
              })}
            />
            {statusPhoneError && <p className={styles.form__item_error}>{errors.phone?.message}</p>}
          </article>

          <article className={styles.center__form_item}>
            <label className={styles.form__item_label} htmlFor="mail">Почта</label>
            <input
            className={styles.form__item_input}
              id="mail"
              {...register("mail", {
                required: "Почта обязательна",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Неверный формат почты",
                },
                onChange: () => {
                  setStatusMailError(false);
                },
              })}
            />
            {statusMailError && <p className={styles.form__item_error}>{errors.mail?.message}</p>}
          </article>

          <article className={styles.center__form_item}>
            <label className={styles.form__item_label} htmlFor="pass">Пароль</label>
            <input
            className={styles.form__item_input}
              type="password"
              id="pass"
              {...register("pass", {
                required: "Пароль обязателен",
                onChange: () => {
                  setStatusPassError(false);
                },
              })}
            ></input>
            {statusPassError && <p className={styles.form__item_error}>{errors.pass?.message}</p>}
          </article>
          <button  className={styles.center__form_button} type="submit">Войти</button>
        </form>
      </section>
    </main>
  );
}
