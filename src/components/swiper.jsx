import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {useSelector} from "react-redux";
import * as React from "react";

export default function Slider() {
    const brands = useSelector((state) => state.data.brands);

    return (
        <>
            <Swiper
                className="mt-3"
                spaceBetween={20}
                slidesPerView={7}
            >
                {brands.map((item) =>
                    <SwiperSlide key={item.id}>
                        <div style={{minWidth: 190}} className="primary-background-color rounded-3xl">
                            <div className="flex justify-center items-center gap-3 p-2">
                                <img style={{width: 75, height: 56}} src={item.img} alt={'car1'}/>
                                <div className="gray-color">{item.name}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}