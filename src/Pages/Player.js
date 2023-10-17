import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayerContainer>
      <div className="player">
        <div className="backArrow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <iframe
          src="https://www.youtube.com/embed/mqqft2x_Aa4"
          title="THE BATMAN – Main Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .backArrow {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }
    iframe {
      width: 100vw;
      height: 100vh;
    }
  }
`;

export default Player;
