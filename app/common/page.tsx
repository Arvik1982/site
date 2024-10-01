"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import InputMask from "react-input-mask";
import { LoginFormInputs } from "../types/types";
import { useErrorStatus } from "../store/hooks/hooks";

export default function Common() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const {
    statusMailError,
    statusPhoneError,
    statusPassError,
    setStatusMailError,
    setStatusPassError,
    setStatusPhoneError,
  } = useErrorStatus(errors);
  //Хук для отслеживания ошибки ввода в поля инпут

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // добавить логику для обработки данных формы, например, отправку на сервер
  };

  return (
    <main className={styles.page__container}>
      <section className={styles.page__container_enter}>
        <h1>Вход</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <article>
            <label htmlFor="phone">Телефон</label>
            <InputMask
              id="phone"
              mask="+7 (999) 999-99-99"
              {...register("phone", {
                required: "Телефон обязателен",
                onChange: () => {
                  setStatusPhoneError(false);
                },
              })}
            />
            {statusPhoneError && <p>{errors.phone?.message}</p>}
          </article>

          <article>
            <label htmlFor="mail">Почта</label>
            <input
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
            {statusMailError && <p>{errors.mail?.message}</p>}
          </article>

          <article>
            <label htmlFor="pass">Пароль</label>
            <input
              type="password"
              id="pass"
              {...register("pass", {
                required: "Пароль обязателен",
                onChange: () => {
                  setStatusPassError(false);
                },
              })}
            ></input>
            {statusPassError && <p>{errors.pass?.message}</p>}
          </article>
          <button type="submit">send</button>
        </form>
      </section>
    </main>
  );
}
