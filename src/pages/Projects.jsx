import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow-sm'>Projects </span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Transforming concepts into functional and user-friendly web solutions, 
          my portfolio reflects the versatility and depth of my full stack development expertise.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {
          projects.map(project =>(
            <div key={project.name} className='lg:w-[400px] w-full'>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme} `}/>
                <div className='btn-front rounded-xl flex items-center justify-center'>
                  <img src={project.iconUrl} alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'  />
                </div>
              </div>
              <div className='mt-5 flex flex-col'>
                <h4 className='text-xl font-poppins font-semibold'>{project.name}</h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link 
                    to={project.link} 
                    rel='noopener noreferrer'
                    target='_blank'
                    className='font-semibold text-blue-600 '> Live Link
                  </Link>
                  <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
      </section>
  )
}

export default Projects