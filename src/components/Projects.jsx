import React, { useEffect} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaImage,FaHouse,FaSchool,FaFile } from "react-icons/fa6";
const Projects = () => {
  const stopp=()=>{ 
    const cursorElement = document.getElementsByClassName("Typewriter__cursor")[0];
    if (cursorElement) {
      cursorElement.classList.add("stop");
  };
  }
  useEffect(()=>{
    gsap.to(".b1", { duration: 2, width:"20rem",height:"20rem",repeat:-1,yoyo:true,ease: "power1.in", });
    gsap.to(".b2", { duration: 2,delay:1, width:"25rem",height:"25rem",repeat:-1,yoyo:true,ease: "power1.in", });
    gsap.to(".b3", { duration: 2,delay:-1, width:"15rem",height:"15rem",repeat:-1,yoyo:true,ease: "power1.in", });
  },[])
   const splideOptions = {
    type: 'slide',
    rewind: true,
    width: '100%',
    height:"68vh",
    perPage: 1,
    pagination: false,
    gap: '1rem',
  };
  return (
    <div>
      <div className='header'>
      <Typewriter
        onInit={(typewriter) => {
      typewriter
      .typeString("Projects")
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
        <div className='balls b2' style={{width:"20rem",height:"20rem",left:"60%",top:"25%"}}></div>
        <div className='balls b3' style={{width:"10rem",height:"10rem",left:"90%",top:"80%"}}></div>
        

        <div className='greed greed2'>
          <div className='navBox'>
            <a href="/"><FaHouse/>Home</a>
            <a href="/projects"><FaImage/>Projects</a>
            <a href="/training"><FaSchool/>Training</a>
            <a href="/Jonathan-Lam Resume[2846].pdf (1).pdf" rel="noreferrer" target="_blank"><FaFile />Resume</a>
          </div>
          <div className='projBox'>Projects:
          <div>
  <Splide options={splideOptions} aria-label="My Favorite Images">
    <SplideSlide>
      <div className="slide-content">
        <a href="https://github.com/jlam303/portfolio" target="_blank" rel="noopener noreferrer">
            <img src="port1.png" alt="" />
        </a>
        <p>This was the first iteration of my portfolio created in August 2022 during my time at West-MEC.</p>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className="slide-content">
        <a href="https://github.com/jlam303/portfolio2" target="_blank" rel="noopener noreferrer">
            <img src="port2.png" alt="" />
        </a>
        <p>This was the second iteration of my portfolio created in May 2023 during my time at West-MEC.</p>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className="slide-content">
        <a href="https://github.com/jlam303/FBLAWebsite" target="_blank" rel="noopener noreferrer">
            <img src="fbla.png" alt="" />
        </a>
        <p>This was a project I created for the FBLA e-business category in 2023 for the State Leadership conference in Arizona.</p>
      </div>
    </SplideSlide>
  </Splide>

          </div>
          
          </div>
          <div className='conBox'>Contact:
          <div>jplam9@gmail.com</div>
          <div>jlam303@west-mec.org</div>
          <div>jlam303@west-mec.edu</div>

          <div>Phone: 111-111-1111</div>
          </div>
        </div>
    </div>
  )
}


export default Projects