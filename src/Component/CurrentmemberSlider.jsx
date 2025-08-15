import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CurrentmemberSlider.module.css'
import { useNavigate } from "react-router-dom";
 


function CurrentmemberSlider(){
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
  return(
    <div className={styles.cardsliderContainer}>
      <h1 className={styles.currentmember}>Current Member</h1>
        <div className={styles.cardContainer}>
          <Slider {...settings}>
          {data.map((d) => (
            <div className={styles.cardBox}>
              <div className={styles.imageBox}> 
                <img src={d.url} alt="image"  className={styles.image}/>
              </div>

              <div className={styles.textBox}>
                <h1 className={styles.Name}>{d.name}</h1>
                <h2 className={styles.about}>{d.about}</h2>
                <button className={styles.readButton}
                onClick={() =>
                    navigate(`/readmore/${encodeURIComponent(d.name)}`, {
                      state: { name: d.name, url: d.url, about: d.about },
                    })
                  }>Read More</button>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    </div>
  )
}

const data =[
  {
    name:`Mr. Kapil Dev`,
    url:`Mr. Kapil Dev.jpg`,
    about:`PhD Scholar`
  },
    {
    name:`Ms. Anupma Gadhwal`,
    url:`Ms. Anupma Gadhwal.jpg`,
    about:`PhD Scholar`
  },
    {
    name:`Mr. Saurabh Kumar`,
    url:`Mr. Saurabh Kumar.jpg`,
    about:`PhD Scholar`
  },
    {
    name:`Mrs. Pooja Tiwari`,
    url:`Mrs. Pooja Tiwari.jpg`,
    about:`PhD Scholar`
  },
    {
    name:`Mr. Sayantan Das`,
    url:`Mr. Sayantan Das.jpg`,
    about:`Research Associate`
  },
    {
    name:`Mr. Anil Kumar`,
    url:`Mr. Anil Kumar.jpg`,
    about:`PhD Scholar`
  }

]
export default CurrentmemberSlider;