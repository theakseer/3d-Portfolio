import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import { Plane } from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume=0.5;
  audioRef.current.loop=true;
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() =>{
    if(isPlaying){
      audioRef.current.play();
    }
    return ()=>{
      audioRef.current.pause();
    }
  },[isPlaying])

  const [currentStage, setCurrentStage] = useState(1)
  const modifyIslandForScreenSize = () => {
    let screenScale = null
    let  screenPosition = [0,-6.5,-43]
    let rotation = [0.1,4.6,0]
    if (window.innerWidth < 768){
      screenScale = [0.9,0.9,.9]
      screenPosition = [0,-6.5,-43]
    } 
    else {
      screenScale = [1,1,1]
      // screenPosition = [0,-6.5,-43]
    }
    return [screenScale, screenPosition, rotation]
  }
  const modifyPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5]
      screenPosition = [0,-1.5,0]
    } 
    else {
      screenScale = [3,3,3]
      screenPosition = [0,-4,-4]
    }
    return [screenScale, screenPosition]
  }
  const [planeScale, planePosition] = modifyPlaneForScreenSize()
  const [islandScale, islandPosition, islandRotation] = modifyIslandForScreenSize()
  const [isRotating, setIsRotating] = useState(false)

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div> 

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : "cursor-grab"}`}
        camera={{near:0.1, far:1000}}>
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={0.01}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#bef" groundColor={"#000"} intensity={1}/>
            <Bird/>
            <Sky
             isRotating={isRotating}
            />
            <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation} 
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
            />
            <Plane
            position={planePosition} 
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0,20,0]}
            />
          </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlaying(!isPlaying)}
          src={!isPlaying ? soundoff : soundon} 
          alt="sound" />
      </div>
    </section>
  )
}

export default Home