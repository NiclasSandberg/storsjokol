import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';

const Partners = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const partnersRef = useNav('Partners');

	return (
		<section ref={partnersRef} id='partnersContainer'>
			
			<div>
				<h3>Partners</h3>
			
			</div>
		</section>
	);
};

export default Partners;
