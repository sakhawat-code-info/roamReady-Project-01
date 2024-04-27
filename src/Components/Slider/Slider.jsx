import '../Slider/Slider.css'

import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Slider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    // https://www.tailwind-kit.com/images/landscape/8.svg
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;