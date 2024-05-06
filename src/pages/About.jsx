import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>Akseer</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Passionate Frontend & Backend Developer based in India,
          🌱 Currently mastering the MERN (MongoDB, Express.js, ReactJS, Node.js) stack to create full-stack web applications.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text '>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map(skill => (
            <div key={skill.imageUrl} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name}
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Experience with modern frontend frameworks and backend technologies for full-stack development. Here's the rundown:</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map(exp=>(
              <VerticalTimelineElement 
                date={exp.date}
                icon={
                  <div className='flex w-[100%] h-[100%]  justify-center items-center'>
                    <img src={exp.icon} alt={exp.company_name} 
                    className='w-[60%] h-[60%] object-contain'/>
                  </div>
                }
                iconStyle={{
                  background:exp.iconBg,


                }}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle:"solid",
                  borderBottomColor:exp.iconBg,
                  boxShadow:'none'
                }}
                key={exp.company_name}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{exp.title}</h3>
                  <p className='text-black-500 font-medium font-base ' style={{margin:0}}>{exp.company_name}</p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {
                    exp.points.map((point, index) =>(
                      <li className='text-black-500/50 font-normal pl-1 text-sm' key={`experience-point-${index}`}>{point}</li>
                    ))
                  }
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA/>

    </section>
  )
}

export default About