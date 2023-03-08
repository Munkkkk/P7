import React, { useState } from 'react';
import '../styles/slider.css';
import left from '../assets/bigleft.png'
import right from '../assets/bigright.png'

const Slider = ({ pictures }) => {
  const [idx, setIdx] = useState(0);

  const nextSlide = () => {
    if (idx === pictures.length - 1) {
      setIdx(0);
      return;
    }
    setIdx(idx + 1);
  };

  const previousSlide = () => {
    if (idx === 0) {
      setIdx(pictures.length - 1);
      return;
    }
    setIdx(idx - 1);
  };

  return (
    <div className="slider-container">
      <ul
        className="slider"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {pictures.map((p, idx) => (
          <li key={idx} className="slide">
            <img className='slide-img' src={p} alt="" />
          </li>
        ))}
      </ul>
      {pictures.length > 1 ? (
        <>
          <button className="btn-next" onClick={nextSlide}>
            <img src={right} alt=''/>
          </button>
          <button className="btn-prev" onClick={previousSlide}>
          <img src={left} alt=''/>
          </button>
          <div className="counter">
            <span>{idx + 1}</span>/<span>{pictures.length}</span>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Slider;
