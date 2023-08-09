import React from 'react';
import course1 from '../../../assets/images/course-2-1.jpg';
import course2 from '../../../assets/images/course-2-2.jpg';
import course3 from '../../../assets/images/course-2-3.jpg';
import course4 from '../../../assets/images/course-2-4.jpg';
import course5 from '../../../assets/images/course-2-5.jpg';
import course6 from '../../../assets/images/course-2-6.jpg';

import css from './style.module.css';
const courseData = [
  {
    image: course1,
    title: 'Мэдээллийн технологи',
    content: 'Өнөөдөр бүх байгууллага мэдээллийн технологийн хараат болсон байна.',
  },
  {
    image: course2,
    title: 'Програм хангамж',
    content: 'Програм хангамжийн инженерчлэл бол найдвартай бөгөөд үр дүнтэй ажилладаг, хөгжүүлэх болон арчлах',
  },
  {
    image: course3,
    title: 'Мультимедиа технологи',
    content: 'Бидний өдөр тутмын амьдралд үзүүлэх технологийн нөлөөлөл жилээс жилд өсөн нэмэгдсээр  байна.',
  },
  {
    image: course4,
    title: 'Сүлжээний технологи',
    content: 'Сүлжээний технологи нь холбоо, мэдээллийн технологийн нэгэн томоохон салбар болон эрчимтэй хөгж',
  },
  {
    image: course5,
    title: 'Мэдээллийн систем',
    content: 'Өнөөдөр нийгэм эдийн засгийн бүхий л салбар, байгууллагын бизнесийн өдөр тутмын үйл ажиллагааны',
  },
  {
    image: course6,
    title: 'Компьютерийн сүлжээ',
    content: 'Компьютерийн сүлжээ хөтөлбөр нь компьютерийн сүлжээний техник, тоног төхөөрөмж болон сүлжээний ',
  },
  {
    image: course6,
    title: 'Компьютерийн ухаан',
    content: 'Энэхүү хөтөлбөр нь эдийн засаг, биоинформатик, хэл шинжлэл, сэтгэл судлал, мэдээллийн технологи',
  },
];

const Courses = () => {

  return (
    <div>
      <section className={css.courses}>
        <h1 className={css.heading}> Хөтөлбөрүүд </h1>

        <div className={`${css.boxContainer} ${css.item}`}>
          {courseData.map((course, index) => (
            <div key={index} className={ `${css.box} ${css.hide}`}>
              <div className={css.image}>
                <img src={course.image} alt="" />
                <h3>{course.title}</h3>
              </div>
              <div className={css.content}>
                <p>{course.content}</p>
                <button className={css.btn}>цааш үзэх</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
