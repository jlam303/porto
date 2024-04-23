import React, { useEffect} from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaImage,FaHouse,FaSchool,FaFile } from "react-icons/fa6";
const Home = () => {
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
    gsap.to(".bar1", { duration: 2, width:"calc(61vw * .9)",ease: "power1.in", });
    gsap.to(".bar2", { duration: 2, width:"calc(61vw * .8)",ease: "power1.in", });
    gsap.to(".bar3", { duration: 2, width:"calc(61vw * .7)",ease: "power1.in", });


    

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
        <div className='balls b2' style={{width:"20rem",height:"20rem",left:"60%",top:"25%"}}></div>
        <div className='balls b3' style={{width:"10rem",height:"10rem",left:"90%",top:"80%"}}></div>
        

        <div className='greed'>
          <div className='navBox'>
            <a href="/"><FaHouse/>Home</a>
            <a href="/projects"><FaImage/>Projects</a>
            <a href="/training"><FaSchool/>Training</a>
            <a href="/resume" rel="noreferrer" target="_blank"><FaFile />Resume</a>
          </div>
          <div className='bioBox'>Bio:
          <div>Jonathan Lam is a high school student at the West-MEC coding program aiming to become a proficient software developer and innovate in the tech industry.With a drive for learning and a knack for problem-solving, he's poised to make waves in the world of software development.</div>
            
          </div>
          <div className='conBox'>Contact:
          <div>jplam9@gmail.com</div>
          <div>jlam303@west-mec.org</div>
          <div>jlam303@west-mec.edu</div>

          <div>Phone: 111-111-1111</div>
          </div>
          <div className='skillBox'>Skills:
          <div className='skillBox2'>
          <div className='skillBar'>
            <div>HTML 90%:</div>
            <div className='barOverlap bar1'></div>
            <div className='bar'></div>
          </div>
          <div className='skillBar'>
            <div>CSS 80%:</div>
            <div className='barOverlap bar2'></div>
            <div className='bar'></div>
          </div>
          <div className='skillBar'>
            <div>JS 70%:</div>
            <div className='barOverlap bar3'></div>
            <div className='bar'></div>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}


export default Home