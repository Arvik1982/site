import { useState } from "react";
import styles from "./map.module.css";

export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(true);
  return (
    <>
      {mapLoaded && (
        <article className={styles.contacts__container_map}>
          <div className={styles.container__map_map}>
            {!mapLoaded && (
              <div style={{ zIndex: "1000", border: "none" }}>
                Идет загрузка карты...
              </div>
            )}
            {
              <iframe
                onLoadStart={() => setMapLoaded(false)}
                onLoad={() => setMapLoaded(true)}
                style={{
                  zIndex: "1000",
                  border: "none",
                  display: mapLoaded ? "block" : "none",
                }}
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Ac5a1c37a827694896a0656bef767fdca51f779075988af24becdd32414a7115c"
                width="100%"
                height="100%"
                allowFullScreen={true}
              />
            }
          </div>
        </article>
      )}
    </>
  );
}
