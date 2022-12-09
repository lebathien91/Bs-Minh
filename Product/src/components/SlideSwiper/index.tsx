import { ReactNode } from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

interface IProps {
  children: ReactNode;
  timeDelay?: number;
  slidesPerView: number;
  breakpoints?: any;
}

const SlideSwiper = (props: IProps) => {
  const { timeDelay, children, breakpoints, slidesPerView } = props;
  return (
    <Swiper
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      loop={true}
      autoplay={{
        delay: timeDelay,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {children}
    </Swiper>
  );
};

export default SlideSwiper;
