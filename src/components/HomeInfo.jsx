import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const HomeInfo = ({ currentStage }) => {
    const InfoBox =({text, link, btnText})=> (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
            {text}
            </p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} alt="" className='w-4 h-4 object-contain ' />
            </Link>
        </div>
    )

    const renderContent = {
        1: (<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Akseer 👋</span> <br />
            A Full Stack Developer from India.
        </h1>),
        2: (<InfoBox 
              text="Passionate Frontend & Backend Developer, 🌱 Currently mastering the MERN (MongoDB, Express.js, ReactJS, Node.js) stack to create full-stack web applications" 
              link='/about' 
              btnText={"Learn more"}
                />),
        3: (<InfoBox 
            text="Curios about my work and projects" 
            link='/projects' 
            btnText={"Visit here..."}
              />),
        4: (<InfoBox 
            text="Need a project done or searching for a developer? You're just a few keystrokes away" 
            link='/contact' 
            btnText={"Connect with me"}
              />)
    }

    return renderContent[currentStage] || null
}

export default HomeInfo