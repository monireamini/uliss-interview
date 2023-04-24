import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useSelector} from "react-redux";
import * as React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Slider({cars, setCars}) {
    const brands = useSelector((state) => state.data.brands);
    let width = window.innerWidth;

    function handleCategory(id){
        const filter = cars.filter(car => car.brandId === id);
        setCars(filter !== undefined || null ? filter : cars);
    }

    return (
        <>
            <Swiper
                className="mt-3"
                style={{padding: '0 15px 0 15px' }}
                spaceBetween={20}
                modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                scrollbar={{ draggable: true }}
                slidesPerView={width < 576 ? 1 :width < 768 ? 2 : width < 900 ? 3 : width < 1024 ? 4 : width < 1250 ? 5 : 6 }
            >
                {brands.map((item) =>
                    <SwiperSlide key={item.id}>
                        <button onClick={() => handleCategory(item.id)} style={{minWidth: 190}} className="primary-background-color rounded-3xl">
                            <div className="flex justify-center items-center gap-3 p-2">
                                <img style={{width: 75, height: 56}} src={item.img} alt={'car1'}/>
                                <div className="gray-color">{item.name}</div>
                            </div>
                        </button>
                    </SwiperSlide>
                )}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </>
    );
}