import styles from "./style.module.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {useState} from "react";
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  slides: { id: number; image: string }[];
};

export function MySlider({slides}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <img src={slide.image}  />
              <div className={styles.counter}>
                {activeIndex + 1}/{slides.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.pagination}></div>
    </div>
  );
};