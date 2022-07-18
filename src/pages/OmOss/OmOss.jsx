import React from 'react'
import { useNav } from '../../customHooks/useNav';
import styles from '../Page.css';

const OmOss = () => {
  const omOssRef = useNav('OmOss');

  return (
    <section ref={omOssRef} id='omOssContainer'>
	  <div>
				<h3>Om Oss</h3>
			</div>
	  </section>
  )
}

export default OmOss;