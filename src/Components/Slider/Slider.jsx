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
                {/* <SwiperSlide className='carousel-item relative '>
                    <img className='object-cover object-center' src="https://as2.ftcdn.net/v2/jpg/05/17/23/99/1000_F_517239905_MzDgpNvaS32i0XXmK4d1pnvWgmin4oAJ.jpg" alt="" />



                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
                        <div className="max-w-md text-left">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Next Adventure</h1>
                            <p className="mb-5">Bogalake, Bandarban, Bangladesh </p>

                        </div>
                    </div>

                </SwiperSlide> */}

                {/* <SwiperSlide className='carousel-item relative '>
                    <img className='object-cover object-center' src="https://as2.ftcdn.net/v2/jpg/03/14/52/85/1000_F_314528595_xSoa0stx9hYps3OS8Gxx4PwUVMZgaU5N.jpg" alt="" />



                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
                        <div className="max-w-md text-left">
                            <h1 className="mb-5 text-5xl font-bold">Escape to Paradise</h1>
                            <p className="mb-5">Kuala Lumpur, Malaysia </p>

                        </div>
                    </div>

                </SwiperSlide> */}
                {/* 
                <SwiperSlide className='carousel-item relative '>
                    <img className='object-cover object-center' src="https://as1.ftcdn.net/v2/jpg/01/24/23/74/1000_F_124237408_nK08MoSggkSZC03rmHKlWIjgy0wK2RBg.jpg" alt="" />



                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
                        <div className="max-w-md text-left">
                            <h1 className="mb-5 text-5xl font-bold">Experience the Magic of Travel</h1>
                            <p className="mb-5">Panorama view of Angkor Wat temple at sunset. Siem Reap, Cambodia </p>

                        </div>
                    </div>

                </SwiperSlide> */}

                <SwiperSlide className='carousel-item relative '>
                    <img className='object-cover object-center' src="https://as2.ftcdn.net/v2/jpg/03/72/33/47/1000_F_372334710_sIRCcHdYB9sLdk8gyzvXWEouH4ZRoAtX.jpg" alt="" />



                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 text-white">
                        <div className="max-w-md text-left">
                            <h1 className="mb-5 text-5xl font-bold">Find Your Bliss in Travel</h1>
                            <p className="mb-5">A panorama view along Orient beach in St Martin </p>

                        </div>
                    </div>

                </SwiperSlide>












                {/* <SwiperSlide className='carousel-item relative w-full'>
                    <img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" />



                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </SwiperSlide> */}



                {/* <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tailwind-kit.com/images/landscape/8.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1714211950~exp=1714215550~hmac=70faff82510389102c67cf680ce9958833affd3c94d751e8fb34231652280eae&w=1060" alt="" /></SwiperSlide> */}


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