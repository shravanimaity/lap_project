import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import InFo from './InFo';
import CurrentmemberSlider from './CurrentmemberSlider';
import AlumniSlider from './AlumniSlider';
import InternSlider from './InternSlider';
import styles from "./Home.module.css";




function Home() {
  return (
    <div className={styles.sectionBackground}>
      <Hero />
      <Intro />
      <p className={styles.Bio}>
        <strong>Bio-computational Lab</strong> is an interdisciplinary research hub at Jawaharlal Nehru University (JNU) 
        led by Dr. Saurabh Kumar Sharma. The lab is dedicated to exploring the frontiers of Machine Learning (ML)
        and Artificial Intelligence (AI) in understanding complex biological and neurological systems.
        By integrating computational modeling, neural networks, and data-driven approaches, the lab focuses on decoding
        brain functions, neural communication, and systems biology. With a strong emphasis on mathematical modeling,
        network theory, and big data analytics, the lab aims to bridge the gap between biology and computation.
        Research at the Bio-computational Lab supports the development of predictive tools and intelligent systems 
        for solving real-world biological challenges, fostering innovation in computational biology, neuroscience, and AI-driven diagnostics.
      </p>
      <InFo />
      <CurrentmemberSlider />
      <AlumniSlider />
      <InternSlider />
    </div>
  );
}

export default Home;
