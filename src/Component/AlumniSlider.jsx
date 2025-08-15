import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './AlumniSlider.module.css';
import { useNavigate } from "react-router-dom";



function AlumniSlider() {
  const navigate = useNavigate();

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
      <h1 className={styles.currentmember}>Alumni</h1>
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
                <button className={styles.readButton}
                onClick={() =>
                    navigate(`/readmore/${encodeURIComponent(d.name)}`, {
                      state: { name: d.name, url: d.url },
                      }) }>Read More</button>
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
    name: `Dr. Muniraj Gupta`,
    url: `Dr. Muniraj Gupta.jpg`,
    about: `P.hD Computer Science, JNU.  M.Tech., NSUT, New Delhi`
  },
  {
    name: `Dr. Naveen Kumar Singh`,
    url: `Dr. Naveen Kumar Singh.jpg`,
    about: `P.hD Computer Science, JNU. MCA, JNU`
  },
  {
    name: `Ms. Goldy Pandey`,
    url: `Ms. Goldy Pandey.jpg`,
    about: `P.hD Computer Science, JNU. M.Tech CS&T, JNU`
  },
  {
    name: `Ms. Mankirat Kaur`,
    url: `Ms. Mankirat Kaur.jpg`,
    about: `M.Tech Computer Science & Technology, JNU`
  },
  {
    name: `Mr. Jamaluddin`,
    url: `Mr. Jamaluddin.jpg`,
    about: ` PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU`
  },
  {
    name: `Mr. Tirandij Pradhan`,
    url: `Mr. Tirandij Pradhan.jpg`,
    about: `PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU`
  },
  {
    name: `Mr. Raja Babu`,
    url: `Mr. Raja Babu.jpg`,
    about: ``
  },
  {
    name: `Mr. Gulam Mazid`,
    url: `Mr. Gulam Mazid.jpg`,
    about: ``
  },
  {
    name: `Mr. Saquib Warsi`,
    url: `Mr. Saquib Warsi.jpg`,
    about: ``
  },
  {
    name: `Mr. Mritunjay Raj`,
    url: `Mr. Mritunjay Raj.jpg`,
    about: ``
  },

]
export default AlumniSlider;