import React from "react";
import styles from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import {TestimonialsData} from '../../data/testimonials'
import { SwiperSlide, Swiper } from "swiper/react";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise jou man children
            rejoiced.
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={styles.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={styles.reviews}>
        Reviews
      </div>

      <div className={styles.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={styles.tCarousel}
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                           <div className={styles.testimonial}>
                            <img src={testimonial.image} alt="" />
                            <span>{testimonial.comment}</span>
                            <hr/>
                            <span>{testimonial.name}</span>
                            </div> 
                        </SwiperSlide>
                    ))
                }
            </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
