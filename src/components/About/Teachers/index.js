import React from 'react';
import css from './style.module.css';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import teacher1 from '../../../assets/images/teacher-1.jpg';
import teacher2 from '../../../assets/images/teacher-2.jpg';
import teacher3 from '../../../assets/images/teacher-3.jpg';
import teacher4 from '../../../assets/images/teacher-4.jpg';
import teacher5 from '../../../assets/images/teacher-5.jpg';

const teachersData = [
  {
    image: teacher1,
    name: 'Батбаяр',
    degree: 'Доктор',
    position: 'Тэнхмийн эрхлэгч',
    email: 'batbayar@seas.num.edu.mn',
    roomNumber: '2B-101',
    roomPhone: '75754400-3101',
  },
  {
    image: teacher2,
    name: 'Ганзориг',
    degree: 'Доктор',
    position: 'Тэнхмийн эрхлэгч',
    email: 'ganzorig@seas.num.edu.mn',
    roomNumber: '2B-102',
    roomPhone: '75754400-3102',
  },
  {
    image: teacher3,
    name: 'Долгорсүрэн',
    degree: 'Доктор',
    position: 'Тэнхмийн эрхлэгч',
    email: 'dolgor@seas.num.edu.mn',
    roomNumber: '2B-103',
    roomPhone: '75754400-3103',
  },
  {
    image: teacher4,
    name: 'Энхбаяр',
    degree: 'Доктор',
    position: 'Тэнхмийн эрхлэгч',
    email: 'enkhbayar@seas.num.edu.mn',
    roomNumber: '2B-104',
    roomPhone: '75754400-3104',
  },
  {
    image: teacher5,
    name: 'Амарбаяр',
    degree: 'Доктор',
    position: 'Тэнхмийн эрхлэгч',
    email: 'amarbayar@seas.num.edu.mn',
    roomNumber: '2B-105',
    roomPhone: '75754400-3105',
  },
];


const Teachers = () => {
  return (
    <section className={css.teachers}>
      <h1 className={css.about_title}>Багш, ажилчид</h1>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          991: {
            width: 991,
            slidesPerView: 3,
          },
        }}
      >
        {teachersData.map((teacher, index) => (
          <SwiperSlide
            key={index}
            className={`${css.swiperSlide} ${css.slide123}`}
          >
            <div className={css.image}>
              <img src={teacher.image} alt="" />
              <div className={css.share}>         
                  <p><b>Нэр:</b>{teacher.name}</p>
                  <p><b>Эрдмийн зэрэг:</b> {teacher.degree}</p>
                  <p><b>И-мэйл:</b> {teacher.email}</p>
                  <p><b>Өрөө дугаар:</b> {teacher.roomNumber}</p>
                  <p><b>Өрөөний утас:</b> {teacher.roomPhone}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Teachers;
