import "./FoodPhotos.css"
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "./assets/5d01e25aba0925027306358421589e59.jpg";
import img2 from "./assets/949efc6f26cbc0233c78e87fce3eabaa.jpg";
import img3 from "./assets/c40612ba34c12763be88bcb6d347ca1e.jpg";
import img4 from "./assets/cf04f69ceeb41095ca2fc23d2b7ae779.jpg";
import img5 from "./assets/d2d7547130591b381abba7b5437b0c8e.jpg";
import img6 from "./assets/e6adedec0d0f7ddf350c860b8f9ce590.jpg";

function FoodPhotos() {
    return (
        <section className="FoodPhotos">
            <p>Фото блюд</p>
            <Swiper
                pagination={true}
                loop={true}
                autoplay={true}
                modules={[Autoplay]}
                className="FoodPhotosSwiper"
                slidesPerView={4}
                spaceBetween={0}>
                <SwiperSlide>
                    <img src={img1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt=""/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default FoodPhotos;