import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

import TopNav from "../Components/TopNav";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://irs.www.warnerbros.com/gallery-v2-jpeg/movies/media/ajax/fieldytvideos/und/form-jwjf-3nm0lidwwfptrjddj6fgeoxv8tbpewkmx0lro/tbm-trl2-88772.jpg"
          alt="hero"
        />
        <div className="container">
          <div className="title">
            <h1>The Batman</h1>
            <p>
              Batman is called to intervene when the mayor of Gotham City is
              murdered. Soon, his investigation leads him to uncover a web of
              corruption, linked to his own dark past.
            </p>
          </div>
          <div className="buttons">
            <button className="playBtn">
              <FaPlay />
              Play
            </button>
            <button className="moreBtn">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
  }
  .background-image {
    filter: brightness(45%);
  }
  img {
    width: 100%;
    height: 70%;
  }
  .container {
    position: absolute;
    bottom: 10rem;
    .title {
      h1 {
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 4.5rem;
        color: darkred;
      }
      p {
        margin-bottom: -3.125rem;
        width: 40rem;
        margin-left: 5rem;
        font-family: "lexand Deca", sans-serif;
        color: white;
        font-weight: 300;
      }
    }
    .buttons {
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      border-radius: 0.3rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .moreBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      border-radius: 0.3rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

export default Netflix;
