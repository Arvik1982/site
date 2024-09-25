
import styles from "./aboutCompany.module.css";
import HomeArticleTextWrapper from "../HomeArticleTextWrapper/HomeArticleTextWrapper";



export default function AboutCompany(){
    return(
  <HomeArticleTextWrapper>
    <p className={styles.text__container_p}>
            В течение последних <strong>100</strong> лет я работал в качестве
            фронтенд-разработчика и приобрел значительный опыт в создании
            высококачественных веб-приложений. Мой опыт включает:
          </p>

          <ul className={styles.text__container_ul}>
            <li className={styles.container__ul_li}>
              <strong>Разработка интерфейсов:</strong> Я использовал React для
              создания отзывчивых и пользовательских интерфейсов. Мой опыт
              работы с компонентами и хуками позволяет мне эффективно
              разрабатывать и поддерживать сложные приложения.
            </li>
            <li className={styles.container__ul_li}>
              <strong>Типизация с TypeScript:</strong> Я активно использую
              TypeScript для повышения надежности кода и улучшения
              взаимодействия с командой. Это позволяет мне создавать более
              безопасные и поддерживаемые приложения.
            </li>
            <li className={styles.container__ul_li}>
              <strong>Управление состоянием с Redux:</strong> Я использовал
              Redux для управления состоянием приложений, что обеспечивает
              предсказуемость и упрощает отладку.
            </li>
            <li className={styles.container__ul_li}>
              <strong>Работа с RTK Query:</strong> Я применял RTK Query для
              эффективного управления запросами к API, что значительно ускоряет
              процесс разработки и улучшает производительность приложений.
            </li>
            <li className={styles.container__ul_li}>
              <strong>Оптимизация производительности:</strong> Я знаком с
              методами оптимизации производительности приложений на основе
              Next.js, включая предварительную загрузку данных и статическую
              генерацию страниц.
            </li>
          </ul>

          <p className={styles.about__container_p}>
            Я горжусь своим вниманием к деталям и стремлением к качеству. Я
            также обладаю хорошими навыками командной работы и коммуникации, что
            позволяет мне эффективно взаимодействовать с коллегами и клиентами.
          </p>

          <p className={styles.about__container_p}>
            Я был бы рад возможности обсудить, как мой опыт может быть полезен
            вашей команде.
          </p>

          <p className={styles.about__container_p}>
            Спасибо за ваше время и внимание. Я с нетерпением жду возможности
            поговорить с вами о данной вакансии.
          </p>
  </HomeArticleTextWrapper>
    )
}