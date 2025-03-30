import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
            On time, within budget and top-quality work. Highly recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Aoife S.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
            From the initial design to the final planting, everything was well thought-out and beautifully executed. We loved their creativity!
            </p>
            <p className="font-primary font-semibold text-primary">John K.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
            Our new patio and outdoor kitchen exceeded every expectation. Solid craftsmanship and great communication throughout.
            </p>
            <p className="font-primary font-semibold text-primary">Sarah M.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
