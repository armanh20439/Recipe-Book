import {  Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';



const NewRecipe = () => {
    return (
        <section>
            <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">--- New Super Recipe ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">Enjoy Your Recipe</h3>
        </div>
            <div>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mb-24"
            >
                
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                
            </Swiper>
        </div>
        </section>
    );
};

export default NewRecipe;