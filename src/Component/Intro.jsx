import styles from './Intro.module.css';
import React from 'react'

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <img src="Dr.Saurabh kumar.png" alt="dr." className={styles.component_image} />
      </div>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Dr. SAURABH KUMAR SHARMA  </h1>
        <h2 className={styles.heading2}>ASSISTANT PROFESSOR</h2>
        <p className={styles.para}>School of Computer & Systems Sciences
          Jawaharlal Nehru University, New Delhi, INDIA
          Ph.D. (Computational Neuroscience), Jawaharlal Nehru University, New Delhi, 2019.
          M.Tech. (Computational & Systems Biology), Jawaharlal Nehru University, New Delhi, 2014.
          B.Tech. (Computer Science and Engineering), Lovely Professional University, Punjab, 2012.</p>
      </div>
       </div>  
   
  )
}

export default Intro;