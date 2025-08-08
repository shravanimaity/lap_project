import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css';
import data from './data.json';


function Hero() {
  const [next, setNext] = useState(0);
  let ref = useRef(null)

  const handleNext = () => {
    setNext((previousValue) => {
      if (previousValue == data.length - 2) {
        return 0
      }
      return previousValue + 1
    })

  };
  const handlePre = () => {
    if (next == 0) {
      setNext(data.length - 1)
    } else {
      setNext(next - 1);
    }

  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 2000)
    return (() => {
      clearInterval(ref.current)
    })
  }, [])

  return (
    <div className={styles.hero_container} onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => ref.current = setInterval(handleNext, 2000)}>

      <div className={styles.imageWrapper}>
        <button className={styles.left_btn} onClick={handlePre}>{"<"}</button>
        <img src={data[next].url} alt="" className={styles.image} />
        <button className={styles.right_btn} onClick={handleNext}>{">"}</button>
      </div>
      
      <div className={styles.dot}>
        <div className={styles.dots}>
          {data.map((_, i) => (
            <div
              key={i}
              className={`${styles.dotItem} ${next === i ? styles.active : styles.inactive}`}
            ></div>
          ))}
        </div>
      </div>


    </div>



  );
}

export default Hero;