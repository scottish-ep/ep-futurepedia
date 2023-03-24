import { useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import classNames from "classnames";

import "swiper/css";
import 'swiper/scss/navigation';

import { isArray } from '@/utils';
import styles from "./ChipSwiper.module.scss";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface ChipSwiperInterface {
  tags: any[],
  className?: string
}

const ChipSwiper = (props: ChipSwiperInterface) => {
  const {tags, className} = props;

  const sliderRef = useRef<SwiperType>();

  return (
    <div className={classNames(styles.slider__wrapper, className)}>
      <div className={styles.btn_prev} onClick={() => sliderRef.current?.slidePrev()}>
        <ArrowBackIosIcon />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        slidesPerView={7}
        slidesPerGroup={7}
        onBeforeInit={(swiper: any) => {
          sliderRef.current = swiper;
        }}
      >
        {
          isArray(tags) && tags.map((item: any, index: number) => (
            <SwiperSlide key={index} >
              <div className={styles.chip}>
                {item.name}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={styles.btn_next} onClick={() => sliderRef.current?.slideNext()}>
        <ArrowForwardIosIcon />
      </div>
      
    </div>
  );
}

export default ChipSwiper;