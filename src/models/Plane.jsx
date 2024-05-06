import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'

export const Plane = ({isRotating, ...props}) => {
    const ref = useRef()
    const {scene, animations} = useGLTF(planeScene)
    const {actions} = useAnimations(animations, ref)

    useEffect(()=>{
      if(isRotating){
        actions['Take 001'].play()
      } else {
        actions['Take 001'].stop()
      }
    },[actions, isRotating])

    return (
      <mesh ref={ref} {...props} isRotating>
          <primitive object={scene}/>
      </mesh>
    )
}
