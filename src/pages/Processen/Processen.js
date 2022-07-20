import React from 'react';
import { useNav } from '../../customHooks/useNav';
import styles from './Processen.module.css';
import Slider from '../../components/Slider.jsx';


const Processen = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const processenRef = useNav('Processen');

	return (
		<>
		<section ref={processenRef} id='processenContainer'>
		
		<h3>Processen</h3>
		
		<div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe width="1268" height="713" src="https://www.youtube.com/embed/7BmWKtvHE0A" title="Storsjökol  - Kolfabrik" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  
            
          </div>
        </div>
		
				<Slider />
			
			
		</section>
		
		</>
	);
};

export default Processen;
