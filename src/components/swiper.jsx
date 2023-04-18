import {Swiper, SwiperSlide} from "swiper/react";
import car1 from "../assets/images/1.png";
// Import Swiper styles
import 'swiper/css';

export default function Slider() {
    return (
        <>
            <Swiper
                className="mt-3"
                spaceBetween={20}
                slidesPerView={7}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">opel</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">pride</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2 "><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">benz</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">toyota</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">saipa</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">das</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">das</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">das</div></div></SwiperSlide>
                <SwiperSlide className="primary-background-color rounded-3xl"><div className="flex justify-center items-center gap-3 p-2"><img style={{width: 75}} src={car1} alt={'car1'} /><div className="gray-color">das</div></div></SwiperSlide>
            </Swiper>
        </>
    );
}