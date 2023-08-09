import React from "react";
import css from "./style.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import { Link } from "react-router-dom";
import home1 from "../../../assets/images/newsImage-1-1.jpg";
import home2 from "../../../assets/images/home-slide-2.jpg";
import home3 from "../../../assets/images/home-slide-3.jpg";

const homeSlides = [
  {
    image: home1,
    title:
      "ХШУИС-ийн оюутны эрдэм шинжилгээний хурал болж шагналт байрууд тодорлоо",
    date: "2023.05.09",
  },
  {
    image: home2,
    title:
      "МУИС-ийн МКУТ-ийн багш Б.Магсаржав докторын зэргээ амжилттай хамгааллаа",
    date: "2023/02/06",
  },
  {
    image: home3,
    title: "Үйлдвэрийн дадлага хамгаалалт 2020 -оны намрын улирал",
    date: "2023/02/06",
  },
];

const Home = () => {
  return (
    <section className={css.home}>
      <Swiper
        modules={[Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        direction={"horizontal"}
      >
        {homeSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${css.swiperSlide} ${css.slide1}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <Link to="contact">
              {" "}
              {}
              <div className={css.content}>
                <h3>{slide.title}</h3>
                <p className={css.date1}>{slide.date}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
