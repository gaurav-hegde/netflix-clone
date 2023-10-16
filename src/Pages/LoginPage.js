import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";

const LoginPage = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 85vh;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    height: 55vh;
    padding: 2rem;
    color: white;
    border-radius: 0.5rem;

    .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      input {
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        border: none;
        width: 25rem;
        height: 2.3rem;
        outline: none;
      }
      button {
        padding: 0.5rem;
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 0.5rem;
        height: 3.3rem;
        color: white;
        font-weight: bolder;
        font-size: 1rem;
      }
    }
  }
`;

export default LoginPage;
