"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

function page() {

  const [name,setname] = useState('');
  const [mail,setmail] = useState('');
  const [message,setmessage] = useState('');


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if(!name || !mail || !message){
      return toast('Fill all the fields');
    }

    emailjs.sendForm('service_e3u2q6k', 'template_b4w01mp', form.current, '2c4nkW1na6lnywGVB')
      .then((result) => {
          toast('We will contact you within 24 hours :)')
          setmail('');
          setname('');
          setmessage('');
      }, (error) => {
        toast(error.text)
         
      });
  };
  return (

    <div className='min-h-screen bg-black overflow-hidden '>
   <div className='w-screen bg-black'>
      <form className='mx-auto max-w-[200px] flex flex-col' ref={form} onSubmit={sendEmail}>
      <label className='text-white font-semibold max-w-[200px] text-center'>Name</label>
      <input type='text' value={name} onChange={e=>setname(e.target.value)} className='max-w-[200px] max-h-[200px]' name="user_name"/>
      <label className='text-white font-semibold max-w-[200px] text-center'>Mail</label>
      <input  value={mail} onChange={e=>setmail(e.target.value)}  type='email' className='max-w-[200px] max-h-[200px]' name="user_email"/>
      <label className='text-white font-semibold max-w-[200px] text-center'>Message</label>
      <div className='max-w-[200px]'>
      <textarea  value={message} onChange={e=>setmessage(e.target.value)} className='w-full ' name="message"/>
      </div>
      <button className='bg-white font-semibold mt-3' type="submit" value="Send">Send</button>


      </form>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
    <div className='overflow-hidden'>
     
      <img style={{
  margin: "auto",
  maxWidth: "500px",
  maxHeight:"500px"
}} alt='skeleton' src={'/skeleton.jpg'}/>
      </div>
    
    </div>
  )
}

export default page
