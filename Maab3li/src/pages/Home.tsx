import bg from '../assets/images/a-colorful-night-sky-with-stars-and-clouds-photo.jpeg'
import { motion } from "motion/react"
import { NavHashLink as Link } from 'react-router-hash-link';
import { BlurIn } from '../features/blurInTextAnimation';

export const Home = () => {
  return (
    <div id='home' className='w-[100%] h-[100vh]'>
        <img src={bg} alt='background image' className='absolute w-[100%] h-[100%]' fetchPriority='high' />
        <div className='relative h-[300px] mt-[100px] place-content-center'>
            <BlurIn>
                <div className='h-max-content pb-2 bg-clip-text text-transparent bg-linear-to-r from-[#FDC700] via-[#FFFBEB] to-[] text-[3rem]/12 font-bold px-10'>
                Assalamu Alaykum<br></br>I'm Maab Ali, a Software Engineer & Frontend Dev.
                </div>
          
            </BlurIn>
            <motion.div 
                initial={{translateY: -10}}
                animate={{translateY: 0 }}
                transition={{duration:.8, repeat:Infinity}}
            >
                    <Link to="#about&skills" smooth>
                        <div className='w-12 h-14 place-self-center place-content-center text-yellow-200 text-[3rem] mt-5 rotate-90 border-2 '>
                            ➧
                        </div>
                    </Link>
                </motion.div>
        </div>
    </div>
  )
}
