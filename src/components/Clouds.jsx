import Link from 'next/link'
import React from 'react'

function Clouds() {
  return (
    <div>
      <div id="banner" className='bg-sky-300'>
        <div id='clouds'>
            <div className='absolute top-0 flex justify-around w-screen'>
            <Link href={'/contact'}><img alt='Contact' height={'30px'} width={'30px'} src='phoneicon.png'/> </Link>
            <a target='_blank' href='https://www.instagram.com/jatinbedii/'><img height={'30px'} width={'30px'} src='igicon.png' alt='Instgram icon'/> </a>
              </div>
            <img src='/cloud1.png' id='cloudanimation1' className='z-10 absolute bottom-0 max-w-[100%]'/>
           <img src='/cloud2.png' id='cloudanimation2' className='z-9 absolute bottom-0 max-w-[100%]'/>
            <img src='/cloud3.png' className='absolute bottom-0 max-w-[100%]' id='cloudanimation3'/>
            <img src='/cloud4.png' className='absolute bottom-0 max-w-[100%]' id='cloudanimation4'/>
            <img src='/cloud5.png' className='absolute bottom-0 max-w-[100%]' id='cloudanimation5'/>
        </div>
      </div>
      </div>
  )
}

export default Clouds
