import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import  Fox  from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'


const Contact = () => {
  const [form, setForm] = useState({name:"", email:"", message:""})
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef()
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = ( e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Akseer",
        from_email: form.email,
        to_email:"theakseer@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert(
        {
        show: true,
        text:'Message sent successfully', 
        type: 'success'
      });
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle');
        setForm({name:"", email:"", message:""})
        
      }, [3000]);
      
    }).catch(err => {
      setIsLoading(false);
      setCurrentAnimation('idle'); 
      console.log(err);
      showAlert({
        show: true, 
        text:'Some error occurred!', 
        type: 'danger'});
    })
    
  }
  const handleFocused = ()=>{
    setCurrentAnimation('walk')
  }
  const handleBlur = ()=>{
    setCurrentAnimation('idle')
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert text={"Failed"} /> */}
      <div className='flex-1 w-min-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} ref={formRef}>
          <label className='text-black-500 font-semibold'>Name:
          <input 
            type="text" 
            name='name' 
            className='input' 
            placeholder='John' 
            required 
            value={form.name} 
            onFocus={handleFocused}
            onBlur={handleBlur}
            onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>Email:
          <input 
            type="email" 
            name='email' 
            className='input' 
            placeholder='john@example.com' 
            required 
            value={form.email} 
            onFocus={handleFocused}
            onChange={handleChange}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>Your message:
          <textarea  
            name='message' 
            className='textarea' 
            rows={4}
            placeholder='Let me know how can I help you!!' 
            required
            value={form.message} 
            onChange={handleChange}
            onFocus={handleFocused}
            onBlur={handleBlur}
            />
          </label>
          <button
          type='submit'
          className='btn'
          onFocus={handleFocused}
          onBlur={handleBlur}
          disabled={isLoading}
          onClick={handleSubmit}
            >{
              isLoading ? 'Sending...' : 'Send your message'
            }</button>
        </form>
      </div>
      <div className=' lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position:[0,0,5]
          }}>
            <directionalLight intensity={2.5} position={[0,0,1]} />
            <ambientLight intensity={0.5}/>
            <Suspense fallback={<Loader/>}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5,0.35,0]}
                rotation={[12.6,-0.6,0]}
                scale={[0.5, 0.5, 0.5]}
                />
            </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact