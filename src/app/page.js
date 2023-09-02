"use client"
import { useEffect, useState } from "react"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Projects from "@/components/Projects";
import Photos from "@/components/Photos";
import Ending from "@/components/Ending";
import Clouds from "@/components/Clouds";



export default function Home() {


  const [bulb,setbulb] = useState(false);
  useEffect(()=>{
    AOS.init({
      duration:800,
      once: false
    })
  })

  const bulbclick = (e)=>{

    var myAudio= document.getElementById('myTune');
    if(myAudio){
      myAudio.play();}
    setbulb(!bulb);

    

  }

  return (
    <main>
     <div className={`${bulb?'bg-[#353935]':'bg-black'} md:h-screen`}>
     <audio id="myTune" src="/click.wav" className="invisible"></audio>
      <div className="flex flex-col items h-screen md:flex items-center justify-around md:flex-row">
      <p className={`${bulb?'text-neutral-50': 'text-black'} font-bold md:font-normal text-4xl md:text-7xl lg:text-9xl`}>JATIN</p>
      {bulb? <Image onClick={bulbclick}
      priority={true}
      loading="eager"
      src="/on.png"
      width={200}
      height={200}
      alt="BULB-on"
    />: <Image onClick={bulbclick}
    priority={true}
    loading="eager"
    src="/off.jpg"
    width={200}
    height={200}
    alt="BULB-off"
  />}
    <p className={`${bulb?'text-neutral-50': 'text-black'} font-bold md:font-normal  text-4xl md:text-7xl lg:text-9xl`}>BEDI</p>
      </div>
     
     </div>

     <div className={`${bulb?'':'hidden'}lg:h-screen bg-[#353935]`}>

      {
        bulb?<div>
          <div className="flex flex-col md:justify-around md:flex-row"><p data-aos="fade-right" className="text-5xl md:text-7xl font-semibold md:mt-7">I AM A</p><p data-aos="fade-up"  className="text-7xl md:text-9xl text-[#ECE81A]">FULL STACK</p></div><div className="w-full text-center text-white text-8xl p-2 mt-5 font-bold" id="stripe">Web Dev</div>

          <div className="flex justify-center mt-5"><Image alt="Typing Gif" height={350} width={350} className="mb-3 " src='/Courage2.gif'/></div>
          <div className="h-6 w-full] bg-black ">
            <marquee className="text-white" >
              React - Tailwind -  NodeJS - NextJS - MongoDB - MySQL - ExpressJS - ChakraUI - Javascript - C - CPP
            </marquee>
          </div>
          </div>:<div></div>
      }
     
     </div>
     <div className={`${bulb?'':'hidden'}lg:h-screen bg-[#353935]`}>
     { bulb?<div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <img className="z-1 overflow-hidden h-screen lg:visible"  src={'/tree.png'}  alt="tree"/>
        <p className="z-0  flex flex-col lg:mt-48"><span className="font-semibold text-green-500 text-5xl md:text-6xl">FROM</span><span data-aos="fade-right" className=" text-7xl md:text-9xl text-white">INDIA</span></p>
        <img alt="tree"   className="z-1 transform -scale-x-100 h-screen" src={'/tree.png'} />
        </div>
     </div>:<div></div> }
     </div>
     <div className={`${bulb?'':'hidden'} bg-green-500`}>
        {bulb?<div className="bg-gradient-to-b from-[#353935] to-green-500">
          <div data-aos="fade-right"  className="h-9 bg-green-500"></div>
          <div data-aos="fade-right" className="h-9 bg-white"></div>
          <div data-aos="fade-right" className="h-9 bg-green-500"></div>
          
        </div>:<div></div>

        }
     </div>
     <div className={`${bulb?'':'hidden'} bg-green-500`}>
        {
          bulb?<div>
          <Projects/>

          </div>:<div></div>
        }
     </div>
     <div className={`${bulb?'':'hidden'} bg-black`}>
        {
          bulb?<div>
          <Photos/>

          </div>:<div></div>
        }
     </div>
      
     <div className={`${bulb?'':'hidden'} bg-blue-400`}>
        {
          bulb?<div>
         <Ending/>

          </div>:<div></div>
        }
     </div>

     <div className={`${bulb?'':'hidden'} h-[300px] bg-gradient-to-b from-blue-500 to-sky-300`}>
        {
          bulb?<div>
         

          </div>:<div></div>
        }
     </div>
     <div className={`${bulb?'':'hidden'}`}>
        {
          bulb?<div>
         
           <Clouds/>
          </div>:<div></div>
        }
     </div>

     

    </main>
  )
}
