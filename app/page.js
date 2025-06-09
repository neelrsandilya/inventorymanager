'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faChartLine, faBarcode } from '@fortawesome/free-solid-svg-icons'
import Spline from '@splinetool/react-spline'
import TestimonialSlider from './Home/Components/Testimonials'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <>
      <main className='flex flex-col gap-10'>
        <div className='flex flex-row'>
          <motion.div 
            initial={{opacity:0, y:50}}  
            whileInView={{opacity:1,y:0}}   
            transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} 
            className="logo h-180 w-full bg-gradient-to-r from-indigo-800 to-blue-400"
          >
            <motion.h1 
              initial={{opacity:0, y:50}}  
              whileInView={{opacity:1,y:0}}   
              transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} 
              className='m-30 text-7xl font-bold font-sans leading-30 '
            >
              <div className='absolute'>
                Streamline <span className='text-indigo-900'>Inventory</span><br />
                Track <span className='text-indigo-900'>Stock</span><br />
                Optimize <span className='text-indigo-900'>Operations</span>
              </div>
              <Spline scene="https://prod.spline.design/cleBiEtkLdL71smc/scene.splinecode" />
              <div className='absolute flex flex-row justify-center items-center w-screen mb-200'>
                <Link className='absolute mb-140' href="/Login">
                  <button className='bg-gradient-to-r from-indigo-800 to-blue-800 hover:from-green-400 hover:to-blue-600 text-white text-lg px-15 py-5 text-center rounded-full font-medium transition-all duration-1000'>
                    Login
                  </button>
                </Link>
              </div>
            </motion.h1>
          </motion.div>
        </div>

        <motion.div 
          initial={{opacity:0, y:80}}  
          whileInView={{opacity:1,y:0}}   
          transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} 
          className='bg-gradient-to-r from-indigo-800 to-blue-400 min-h-screen w-full flex justify-center items-center px-10 py-15'
        >
          <div className='w-full'>
            <h3 className='mb-10 font-bold text-4xl hover:scale-105 transition duration-2000 ease-in-out'>
              "Smart Inventory, Smarter Business Decisions"
            </h3>
            <p className='text-xl leading-normal'>
              Manage stock levels, reduce wastage, and boost efficiency with our real-time inventory tracking system.
            </p>
          </div>
          <img 
            className="shadow-lg h-200 mr-10 ml-20 object-cover rounded-4xl hover:scale-105 transition duration-1000 ease-in-out"
            src="/invent.png" 
            alt="Inventory Dashboard"
          />
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:80}}  
          whileInView={{opacity:1,y:0}}   
          transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} 
          className='bg-gradient-to-r from-indigo-800 to-blue-400 w-full min-h-screen flex flex-col justify-center items-center'
        >
          <h1 className='text-6xl text-white'>KEY FEATURES</h1>
          <div className='flex flex-col md:flex-row justify-around items-center m-10 gap-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <FontAwesomeIcon size='10x' icon={faBox} />
              <h3 className='text-gray-800 text-3xl font-bold'>Stock Management</h3>
              <p className='text-center text-lg'>Track items across multiple locations with ease.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <FontAwesomeIcon size='10x' icon={faChartLine} />
              <h3 className='text-gray-800 text-3xl font-bold'>Analytics</h3>
              <p className='text-center text-lg'>Visualize stock trends, sales patterns, and reorder needs.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <FontAwesomeIcon size='10x' icon={faBarcode} />
              <h3 className='text-gray-800 text-3xl font-bold'>Barcode Scanning</h3>
              <p className='text-center text-lg'>Use barcode tech for quick check-in/out and audits.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:80}}  
          whileInView={{opacity:1,y:0}}   
          transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }}  
          className='flex flex-col md:flex-row bg-gradient-to-r from-indigo-800 to-blue-400 w-full min-h-screen justify-center items-center'
        >
          <img 
            className='shadow-lg h-130 mr-20 object-cover rounded-4xl hover:scale-105 transition duration-1000 ease-in-out'   
            src="/data.jpeg"  
            alt="Warehouse system"
          />
          <div>
            <h1 className='text-6xl font-bold mb-10 text-white'>HOW IT WORKS</h1>
            <ol className='flex flex-col gap-5 text-2xl list-decimal text-white'>
              <li><span className='font-bold text-indigo-950'>Add Items: </span>Enter item details or upload from CSV</li>
              <li><span className='font-bold text-indigo-950'>Track Activity: </span>Monitor stock in/out in real time</li>
              <li><span className='font-bold text-indigo-950'>Optimize: </span>Use insights to reorder and reduce overstock</li>
            </ol>
            <Link href="/Dashboard">
              <button className='absolute mt-10 bg-gradient-to-r from-blue-800 to-indigo-950 text-white font-medium rounded-full text-lg px-15 py-5 text-center tracking-widest'>
                TRY IT NOW
              </button>
            </Link>
          </div>
        </motion.div>

        <h2 className="text-5xl font-bold text-center mb-6 text-indigo-300">Recent Activity</h2>
        <motion.div 
          initial={{opacity:0, y:80}}  
          whileInView={{opacity:1,y:0}}   
          transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }}  
          className='w-full h-120 flex justify-center items-center'
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-visible">
            <TestimonialSlider />    
            <TestimonialSlider />    
            <TestimonialSlider />    
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Home;
