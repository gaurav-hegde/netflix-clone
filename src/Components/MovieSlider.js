import React, { useState, useRef } from "react";
import Card from "./Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default React.memo(function MovieSlider({ data, title }) {
  const listRef = useRef(null);

  const [controlVisibility, setControlVisibility] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${600 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-500 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      controlVisibility={controlVisibility}
      onMouseEnter={() => setControlVisibility(true)}
      onMouseLeave={() => setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!controlVisibility ? "none" : ""}`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${!controlVisibility ? "none" : ""}`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 2.5rem;
    font-size: 1.5rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
  }
  .wrapper {
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translate(0px);
      transition: 0.5s ease-in-out;
      margin-left: 5px;
      margin-top: 1rem;
    }
    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 2rem;
      bottom: 0;
      width: 3rem;
      transition: 0.1s ease-in-out;
      svg {
        font-size: 2rem;
        color: white;
        cursor: pointer;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
    .none {
      display: none;
    }
  }
`;
