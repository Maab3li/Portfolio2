import { GradualSpacing } from "../features/gradualSpacingTextAnimation"
import { TypingEffect } from "../features/typingEffectTextAnimation"
import LineWaves from '../features/lineWaves';
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useRef } from "react";
import html from '../assets/images/HTML5.png'
import css from '../assets/images/CSS3.png'
import js from '../assets/images/JavaScript.png'
import react from '../assets/images/React.png'
import tailwind from '../assets/images/Tailwind CSS.png'
import github from '../assets/images/GitHub.png'
import vite from '../assets/images/Vite.js.png'
import 'swiper/css';
import 'swiper/modules'
import type { Mesh } from 'three'

export const About = () => {

  const boxRef1 = useRef<Mesh>(null!)
  const boxRef2 = useRef<Mesh>(null!)
  const boxRef3 = useRef<Mesh>(null!)
  const boxRef4 = useRef<Mesh>(null!)
  const boxRef5 = useRef<Mesh>(null!)
  const boxRef6 = useRef<Mesh>(null!)
  const boxRef7 = useRef<Mesh>(null!)

  function CanvasContent() {
    useFrame(()=> {
      boxRef1.current.rotation.x += 0.005
      boxRef1.current.rotation.y += 0.005
      boxRef1.current.rotation.z += 0.005
      boxRef2.current.rotation.x += 0.005
      boxRef2.current.rotation.y += 0.005
      boxRef2.current.rotation.z += 0.005
      boxRef3.current.rotation.x += 0.005
      boxRef3.current.rotation.y += 0.005
      boxRef3.current.rotation.z += 0.005
      boxRef4.current.rotation.x += 0.005
      boxRef4.current.rotation.y += 0.005
      boxRef4.current.rotation.z += 0.005
      boxRef5.current.rotation.x += 0.005
      boxRef5.current.rotation.y += 0.005
      boxRef5.current.rotation.z += 0.005
      boxRef6.current.rotation.x += 0.005
      boxRef6.current.rotation.y += 0.005
      boxRef6.current.rotation.z += 0.005
      boxRef7.current.rotation.x += 0.005
      boxRef7.current.rotation.y += 0.005
      boxRef7.current.rotation.z += 0.005
    })

    const texture1 = useTexture(html)
    const texture2 = useTexture(css)
    const texture3 = useTexture(js)
    const texture4 = useTexture(react)
    const texture5 = useTexture(tailwind)
    const texture6 = useTexture(github)
    const texture7 = useTexture(vite)

    return (
      <>
        <mesh ref={boxRef1} position={[.6,.5,1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color="sky" map={texture2}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
        <mesh ref={boxRef2} position={[-1.2,.7,-1]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color="#FFB900" map={texture3}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
        <mesh ref={boxRef3} position={[-1,-1,-2]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color={'#FFC9C9'}  map={texture1}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
        <mesh ref={boxRef4} position={[-.5,2,1]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color={'cyan'} map={texture6}/>
          <directionalLight position={[5, 5, 2]} />
        </mesh>
        <mesh ref={boxRef5} position={[.8,-1.5,0]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color={'#A4F4CF'} map={texture4}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
        <mesh ref={boxRef6} position={[1.5,3.5,-2]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color={'#F4A8FF'} map={texture5}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
        <mesh ref={boxRef7} position={[-.5,-3.5,-2]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshPhongMaterial color={'lightgray'} map={texture7}/>
          <directionalLight position={[3, 5, 1]} />
        </mesh>
      </>
    )
  }

  return (
    <div id="about&skills" className="mt-0 w-[100%] h-max-content bg-[#0B0511] relative ">
        <div className="pt-10 h-[5rem] z-9999">
            <GradualSpacing text="About me?" />
        </div>
        <div className="px-10 pt-10 text-[2rem]/8 text-yellow-100 backdrop-opacity-10 z-9999">
            <TypingEffect text="I'm Maab Ali, graduated from Software Engineering department in Sudan University of Science and Technology since 2023." time={2000} />
        </div>
        <div className="pt-10 h-[5rem] z-9999">
            <GradualSpacing text="What I do?" />
        </div>
        <div className="px-10 pt-10 text-[2rem]/8 text-yellow-100 backdrop-opacity-10 z-9999">
            <TypingEffect text="I translate ideas into a visually nice appearing websites with focus on performance and UI&UX." time={2000} />
        </div>
        <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={0}
        warpIntensity={0.3}
        rotation={160}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="#FFB900"
        color2="#ffffff"
        color3="#ffffff"
        enableMouseInteraction
        mouseInfluence={2}
        />
        <div className="pt-14">
            <GradualSpacing text="The skills I got" />
            <div className=" w-[100vw] sm:h-[50vh] md:h-[70vh] lg:h-[80vh]">
              <Canvas className="w-[100vw] bg-blue">
                <CanvasContent />
              </Canvas>
            </div>
        </div>
    </div>
  )
}
