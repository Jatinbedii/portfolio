import React from 'react'
import { useRef } from 'react'
import {motion,useTransform,useScroll} from 'framer-motion';

function Ending() {
  const targetref = useRef();
  const {scrollYProgress} = useScroll({target: targetref});
  const x = useTransform(scrollYProgress,[0,1],["200%","-95%"])
  return (
    <section  className='relative h-[300vh] bg-white'>
      <div className=' sticky h-screen bg-blue-500 top-0 flex items-center overflow-hidden '>
      <motion.div style={{x}} className='flex gap-4'>
          <div className='font-light text-5xl md:text-9xl '>WANNA KNOW MORE</div>
          <div className='text-5xl md:text-9xl'>WANNA KNOW MORE</div>
          <div className='font-semibold text-5xl md:text-9xl'>WANNA KNOW MORE</div>
      </motion.div>


      </div>
      
    </section>
  )
}

export default Ending
