import { useState } from 'react'
import React from 'react'
import styles from "./App.module.css";
import Header from './Component/Header'
import Hero from './Component/Hero'
import Intro from './Component/Intro'
import InFo from './Component/InFo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <Intro />
       <p className={styles.Bio}>     
        Bio-computational Lab is an interdisciplinary research hub at Jawaharlal Nehru University (JNU) 
        led by Dr. Saurabh Kumar Sharma. The lab is dedicated to exploring the frontiers of Machine Learning (ML)
        and Artificial Intelligence (AI) in understanding complex biological and neurological systems.
        By integrating computational modeling, neural networks, and data-driven approaches, the lab focuses on decoding
        brain functions, neural communication, and systems biology. With a strong emphasis on mathematical modeling,
        network theory, and big data analytics, the lab aims to bridge the gap between biology and computation.
        Research at the Bio-computational Lab supports the development of predictive tools and intelligent systems 
        for solving real-world biological challenges, fostering innovation in computational biology, neuroscience, and AI-driven diagnostics.
          </p>
      <InFo />
    </div>
  )
}

export default App
