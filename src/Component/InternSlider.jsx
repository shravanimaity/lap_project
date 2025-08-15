import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './InternSlider.module.css'



function InternSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

     responsive: [
    {
      breakpoint: 1224, // tablets and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    },
    {
      breakpoint: 800, // mobile landscape and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]

  };
  return (
    <div className={styles.cardsliderContainer}>
      <h1 className={styles.currentmember}>Interns</h1>
      <div className={styles.cardContainer}>
        <Slider {...settings}>
          {data.map((d) => (
            <div className={styles.cardBox}>
              <div className={styles.imageBox}>
                <img src={d.url} alt="image" className={styles.image} />
              </div>

              <div className={styles.textBox}>
                <h1 className={styles.Name}>{d.name}</h1>
                <h2 className={styles.about}>{d.about}</h2>
                <button className={styles.readButton}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    name: `Ms. Shivangi `,
    url: `Ms. Shivangi .jpg`,
    about: ` `
  },
  {
    name: `Ms. Priyanka`,
    url: `Ms. Priyanka.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ajay Gupta`,
    url: `Mr. Ajay Gupta.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  {
    name: `Ms. Shruti`,
    url: `Ms. Shruti.jpg`,
    about: `BCA(AI) from LLDIMS `
  },
  {
    name: `Mr. Sahil Pant`,
    url: `Mr. Sahil Pant.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ankush Rawat`,
    url: `Mr. Ankush Rawat.jpg`,
    about: ` `
  },
  {
    name: `Mr. Rashid Reyaz`,
    url: `Mr. Rashid Reyaz.jpg`,
    about: ``
  },
  {
    name: `Mr. Pushpendra`,
    url: `Mr. Pushpendra.jpg`,
    about: `BAC(AI) from LLDIMS`
  },
  {
    name: `Ms. Shravani Maity`,
    url: `Ms. Shravani Maity.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
   
]
export default InternSlider;