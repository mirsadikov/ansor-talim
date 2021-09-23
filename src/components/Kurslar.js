import { useState, useEffect } from "react";

const courses = [
  {
    id: 1,
    title: "Matematika",
    img: "course1.png",
    tutor: {
      name: "Mo‘minov Otabek",
      img: "tutor1.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "280 000",
  },
  {
    id: 2,
    title: "Fizika",
    img: "course2.png",
    tutor: {
      name: "Rasulov Jasur",
      img: "tutor2.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "300 000",
  },
  {
    id: 3,
    title: "Mental arifmetika",
    img: "course3.png",
    tutor: {
      name: "Inoyatov Og‘abek",
      img: "tutor3.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "199 000",
  },
  {
    id: 4,
    title: "Fizika",
    img: "course2.png",
    tutor: {
      name: "Rasulov Jasur",
      img: "tutor2.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "300 000",
  },
  {
    id: 5,
    title: "Mental arifmetika",
    img: "course3.png",
    tutor: {
      name: "Inoyatov Og‘abek",
      img: "tutor3.png",
    },
    desc: "0 dan boshlab eng mukammal misol va masalalargacha o‘rganib chiqamiz",
    price: "199 000",
  },
];

function Kurslar() {
  const [expand, setExpand] = useState(false);
  const [currentCourses, setCurrentCourses] = useState([]);

  useEffect(() => {
    setCurrentCourses(expand ? courses : courses.slice(0, 3));
  }, [expand]);

  return (
    <section className="section section-yangiliklar">
      <div className="section__head">
        <h2 className="heading--2">Kurslar</h2>
        <a
          onClick={() => setExpand((state) => !state)}
          className="btn--underlined"
        >
          {!expand ? "Barcha kurslar" : "Kamroq"}
        </a>
      </div>
      <div className="section__body">
        {currentCourses.map((course) => (
          <figure key={course.id} className="courses">
            <img
              src={`images/${course.img}`}
              alt={course.title}
              className="courses__img"
            />
            <figcaption className="courses__caption">
              <h3 className="courses__title heading--3">{course.title}</h3>
              <div className="courses__tutor">
                <img
                  src={`images/${course.tutor.img}`}
                  className="courses__tutor-img"
                  alt={course.tutor.name}
                />
                <p className="body--2 courses__tutor-name">
                  {course.tutor.name}
                </p>
              </div>
              <p className="courses__desc">{course.desc}</p>
              <h4 className="courses__price heading--4">{course.price} so‘m</h4>
              <button className="btn btn--block">Sotib olish</button>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Kurslar;