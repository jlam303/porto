import React, { useEffect} from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaImage,FaHouse,FaSchool,FaFile } from "react-icons/fa6";
const Training = () => {
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
  return (
    <div>
      <div className='header'>
      <Typewriter
        onInit={(typewriter) => {
      typewriter
      .typeString("Training")
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
        

        <div className='greed'>
          <div className='navBox'>
            <a href="/"><FaHouse/>Home</a>
            <a href="/projects"><FaImage/>Projects</a>
            <a href="/training"><FaSchool/>Training</a>
            <a href="/Jonathan-Lam Resume[2846].pdf (1).pdf" rel="noreferrer" target="_blank"><FaFile />Resume</a>
          </div>
          <div className='bioBox'>Traits:
          <div>Known for my ability to swiftly grasp new concepts and troubleshoot effectively, I excel as a quick learner with strong problem-solving skills, adept communication abilities, and a collaborative approach to teamwork, ensuring seamless cooperation and achievement of collective objectives.</div>
            
          </div>
          <div className='conBox'>Contact:
          <div>jplam9@gmail.com</div>
          <div>jlam303@west-mec.org</div>
          <div>jlam303@west-mec.edu</div>

          <div>Phone: 111-111-1111</div>
          </div>
          <div className='skillBox'>Training/Experience:
          <ul className='exp'>
            <li>Sunrise Mountain High School - August 2020 - Present
            </li>
            <li>West-MEC Coding - August 2022 - Present
            </li>
            <li>Future Business Leaders of America Member - August 2022 - Present
            </li>
            <li>Glendale Public Library Volunteer - April 2023</li>
            <li>Habitat for Humanities Volunteer - April 2023</li>
            
          </ul>
          </div>
        </div>
    </div>
  )
}


export default Training