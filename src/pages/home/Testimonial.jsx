import React from 'react'
import Rating from '../../components/Rating'
import {reviews} from '../../utils/reviews'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function Testimonial() {
  return (
    <section className="section-container">
        <div className="text-center mb-12">
            <h3 className="uppercase text-lg font-semibold text-primary">Testimonials</h3>
            <h2 className="capitalize text-4xl font-bold mb-4 ">Our Client Reviews</h2>
        </div>

        {/* review cards */}
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,

          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
           reviews.map((review, index) => (
  <SwiperSlide
    key={index}
    className="bg-no-repeat bg-cover rounded-lg"
    style={{ backgroundImage: `url(${review.coverImg})` }}
  >
    <div className="md:h-[547px] flex flex-col justify-center items-center">

      <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-6 pt-12 relative text-center">

        <img
          src={review.image}
          alt={review.name}
          className="size-20 rounded-full object-cover absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white"
        />

        <h3 className="text-lg font-semibold text-black">
          {review.name}
        </h3>

        <p className="mb-3 text-gray-500">
          Verified Customer
        </p>

        <p className="text-gray-500 mb-4">
          {review.review}
        </p>

        <div className="w-full flex items-center justify-center text-center">
          <Rating rating={review.rating} />
        </div>

      </div>

    </div>
  </SwiperSlide>
))

        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonial;