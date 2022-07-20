import React, { useState } from "react";
import { useNav } from "../../customHooks/useNav";
import { useRef } from "react";
import cole from "../../assets/images/Storsjökol_web_foto-Magnus-Stenberg_croped.jpg";
import { ArrowheadDown } from "@styled-icons/evaicons-solid/ArrowheadDown";
import styles from "./Home.module.css";
import useScroll from '../../customHooks/useScroll.jsx';

const Home = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Hem");
  // Scroll ref for arrow onClick
  const myRef = useRef(null);
  
  const { scrollY } = useScroll();  

  const [arrow, setArrow] = useState(styles.arrow);
 

  const executeScroll = () =>
    myRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    
   
    console.log("The device pixel ratio for this browser is: "+window.devicePixelRatio);
  return (
    <>
      <header className={styles.homeContainer}>
        
        <img ref={homeRef} id='homeContainer'  className={styles.headerImage} src={cole} alt="unsplash-img" />
     
        <ArrowheadDown
          size="70"
          
          className={scrollY < 5 ? styles.arrow : styles.hide}
          onClick={() => {
            executeScroll();
            setArrow(styles.hide);
          }}
        />
      
      </header>

      <div ref={myRef} className={styles.introText}>
        <p >
          Storsjökol är ett kol producerat i Aspås i hjärtat av Jämtland. Kolet
          är producerat från björk som avverkats i närområdet. När du väljer
          Storsjökol väljer du att spara på miljön. I dagsläget importerar
          Sverige 99.8% av all grillkol som används. Ursprung kan inte alltid
          garanteras.
        </p>
        <p>
          Vårt kol görs på 100% björkved vilket gör att den är lättantänd,
          kommer snabbt upp i värme och håller mycket längre än konventionell
          kol. En påse Storsjökol räcker upp till tre gånger så länge som
          konventionell grillkol i Sverige.
        </p>
        </div>
        
    </>
  );
};

export default Home;
