import React, { useState } from "react";
import { useNav } from "../../customHooks/useNav";
import { useRef } from "react";
import cole from "../../assets/images/Storsjökol_web_foto-Magnus-Stenberg_croped.jpg";
import { ArrowheadDown } from "@styled-icons/evaicons-solid/ArrowheadDown";
import styles from "./Home.module.css";

const Home = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Hem");

  const myRef = useRef(null);

  const [arrow, setArrow] = useState(styles.arrow);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    
  /*function scroll (e) {
			myRef.current.scrollIntoView({block: "end",behavior: "smooth"});	
		}*/

  return (
    <>
      <header ref={homeRef} id='homeContainer' className={styles.homeContainer}>
        <img id="cole-image" src={cole} alt="unsplash-img" />
        <ArrowheadDown
          size="70"
          className={arrow}
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
          storsjökol väljer du att spara på miljön. I dagsläget importerar
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
