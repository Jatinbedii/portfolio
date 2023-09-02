import React from 'react'
import { useRef } from 'react'
import {motion,useTransform,useScroll} from 'framer-motion';
import Image from 'next/image';


function Projects() {
  const targetref = useRef();
  const {scrollYProgress} = useScroll({target: targetref});
  const x = useTransform(scrollYProgress,[0,1],["1%","-95%"])
  return (
    <section ref={targetref} className='relative h-[300vh] bg-white'>
        <div className=' sticky h-screen bg-green-500 top-0 flex items-center overflow-hidden '>

        <motion.div style={{x}} className='flex gap-4'>
        <div className="mt-[50px] text-9xl text-BLACK">PROJECTS  </div>
        <a target='_blank' href="https://github.com/Jatinbedii">
        <div className='bg-black h-60 w-screen ml-[20px] min-w-[350px] max-w-[700px]'> <div className='flex flex-row justify-around'>
          <p className='text-white mt-[100px] md:text-4xl text-center font-semibold '>NOTES APP</p>
         <div  className=" items-center mt-7"><Image alt="notes app" width={200} height={200} src="/notes.jpg"/></div> 
          </div> 
          </div></a>
        <a target='_blank' href="https://github.com/Jatinbedii">

          <div className='bg-black h-60 w-screen ml-[20px] min-w-[350px] max-w-[700px]'> <div className='flex flex-row justify-around'>
          <p className='text-white mt-[100px] md:text-4xl text-center font-semibold '>BLOG</p>
         <div  className=" items-center mt-7"><Image alt="Blog app" width={200} height={200} src="/blog.jpg"/></div> 
          </div> 
          </div></a>


      

        </motion.div>

        </div>
    </section>
  )
}

export default Projects