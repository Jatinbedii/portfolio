import React from 'react'
import Image from 'next/image'
function Photos() {
  return (
    <div className='grid w-full max-w-5xl p-5 mx-auto gap-5 grid-cols-1 md:grid-cols-3 '>
      <Image alt='image1' src='/retro1.jpg' height={300} width={300} />
      <Image alt='image2' src='/retro2.jpg' height={300} width={300}/>
      <Image alt='image3' src='/retro3.jpg' height={300} width={300}/>
      <Image alt='image4' src='/retro4.jpg' height={300} width={300}/>
      <Image alt='image5' src='/retro5.jpg' height={300} width={300}/>
      <Image alt='image6' src='/retro6.jpg' height={300} width={300}/>
    </div>
  )
}

export default Photos
