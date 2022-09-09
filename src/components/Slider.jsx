import React, { useState } from "react";
import { data } from "../data/images.js";
import Modal from "./Modal";
import style from './Slider.css';


const Slider = () => {

const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {

    if(window.innerWidth > 770){
    setCurrentIndex(index)
    setClickedImg(item.link) 
  
    }
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
  <div className="wrapper">
  {data.map((item, index) => ( 
    <div key={index} className="wrapper-images">
      {/*<img 
        src={item.link}
        alt={item.text}
        onClick={() => handleClick(item, index)}
  />*/}
      
     
                <img 
                         srcSet={`${item.linkMobile} 750w, 
                         ${item.link} 1500w`}
                        key={index}
                        alt={item.text}
                        onClick={() => handleClick(item, index)}
                    />
              
            
    </div>
  ))}
  <div>

 
    {clickedImg && (
      <Modal
        clickedImg={clickedImg}
        handelRotationRight={handelRotationRight}
        setClickedImg={setClickedImg}
        handelRotationLeft={handelRotationLeft}
      />
    )}
  </div>
</div>
);
}

export default Slider;