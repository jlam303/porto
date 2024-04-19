import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Home = () => {
  const stopp=()=>{ 
    const cursorElement = document.getElementsByClassName("Typewriter__cursor")[0];
    if (cursorElement) {
      cursorElement.classList.add("stop");
  };
  }
  useEffect(()=>{
    gsap.to(".b1", { duration: 3, width:"20rem",height:"20rem",repeat:-1,yoyo:true,ease: "power1.in", });
  },[])
  return (
    <div>
      <div className='header'>
      <Typewriter
        onInit={(typewriter) => {
      typewriter.typeString('Hello World!')
      .pauseFor(1000)
      .deleteAll()
      .typeString("Jonathan Lam")
      .pauseFor(1000)
      .callFunction(()=>{
          stopp();
      })
      .start();
      }}
      />

      <div className='links'>
        <a href="https://github.com/jlam303" rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href="https://github.com/jlam303" rel="noreferrer" target="_blank"><FaLinkedin /></a>
      </div>
      </div>
        <div className='balls b1' style={{width:"15rem",height:"15rem",left:"10%",top:"60%"}}></div>
        

        <div className='greed'>
          <div className='navBox'>Nav:</div>
          <div className='bioBox'>Bio:</div>
          <div className='conBox'>Contact:</div>
          <div className='skillBox'>Skills:</div>
        </div>
    </div>
  )
}


export default Home