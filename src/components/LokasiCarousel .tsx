"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MapIframe from "./MapIframe";

const locations = [
  "Spade Gaming Karawaci, Tangerang",
  "Spade Gaming Kemanggisan, Jakarta Barat",
  "Spade Gaming Mampang Prapatan, Jakarta Selatan",
];

const LokasiCarousel = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Cabang Kami</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Temukan lokasi Spade terdekat dengan Anda
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {locations.map((loc, index) => (
            <SwiperSlide key={index}>
              <MapIframe location={loc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LokasiCarousel;
