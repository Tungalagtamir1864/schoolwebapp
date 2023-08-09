import React from "react";
import css from "./style.module.css";
import home1 from "../../../assets/images/newsImage-1-1.jpg";
import home2 from "../../../assets/images/home-slide-2.jpg";
import home3 from "../../../assets/images/home-slide-3.jpg";
import iconcalendar from "../../../assets/images/icon-calendar.png";
import { Link } from "react-router-dom";
const newsItems = [
  {
    image: home1,
    title:
      "Бакалаврын зэрэгтэй иргэнийг хоёрдогч (хуучнаар орой, эчнээ) мэргэжлээр элсүүлэх ЭЛСЭЛТИЙН БҮРТГЭЛ эхэллээ",
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
  {
    image: home1,
    title:
      "Бакалаврын зэрэгтэй иргэнийг хоёрдогч (хуучнаар орой, эчнээ) мэргэжлээр элсүүлэх ЭЛСЭЛТИЙН БҮРТГЭЛ эхэллээ",
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
  {
    image: home1,
    title:
      "Бакалаврын зэрэгтэй иргэнийг хоёрдогч (хуучнаар орой, эчнээ) мэргэжлээр элсүүлэх ЭЛСЭЛТИЙН БҮРТГЭЛ эхэллээ",
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


const News = () => {
    return (
      <div className={css.contentDivList}>
        <h1 className="new_title">Мэдээлэл</h1>
        {newsItems.map((item, index) => (
          
          <Link to="/Newsdetail" key={index}>
            <div className={css.contentDivListInner}>
              <div className={css.item}>
                <img src={item.image} alt="" className={css.image} style={{ maxWidth: "50%", height: "100%" }} />
                <div className={css.info}>
                  <div className={css.title}>{item.title}</div>
                  <div className={css.date}>
                    <img src={iconcalendar} alt="" className={css.calendar} />
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default News;
  