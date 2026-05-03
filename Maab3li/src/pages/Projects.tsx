import { GradualSpacing } from "../features/gradualSpacingTextAnimation"
import { Swiper, SwiperSlide } from 'swiper/react';
import deviceshop from '../assets/images/Screenshot_6.png'
import coffeeshop from '../assets/images/Screenshot_7.png'
import extensions from '../assets/images/Screenshot_8.png'
import todolist from '../assets/images/Screenshot_5.png'
import minaclinic from '../assets/images/Screenshot_11.png'
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css';

export const Projects = () => {

  return (
    <div id="projects" className="bg-[#0B0511] w-[100%] h-max-content">
      <div>
        <GradualSpacing text="Projects i did" />
      </div>
      <div className="px-5 sm:px-10 lg:px-15 ">
        <Swiper
        modules={[EffectFade, Autoplay]}
        loop={true}
        effect="fade"
        spaceBetween={50}
        slidesPerView={3}
        setWrapperSize={true}
        autoplay ={{
          delay: 3000,
           disableOnInteraction: false,
        }}
        >
        <SwiperSlide>
          <a href='https://maab3li.github.io/device-shop-checkout-master' target="_blank">
            <img src={deviceshop} alt="device shop app image" /> 
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://maab3li.github.io/Simple-coffee-listing-app' target="_blank">
            <img src={coffeeshop} alt="coffee shop app image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://maab3li.github.io/browser-extensions-manager-ui-main' target="_blank">
            <img src={extensions} alt="extensions app image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://maab3li.github.io/device-shop-checkout-master' target="_blank">
            <img src={todolist} alt="todolist app image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://maab3li.github.io/Mina-clinic' target="_blank">
            <img src={minaclinic} alt="mina clinic app image" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}
