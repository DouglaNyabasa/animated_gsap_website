import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Message from './components/Message/Message';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
    <Navbar/>
    <Hero/>
    <Message/>
    <div className="h-dvh border border-amber-500"></div>
    </main>
  )
}

export default App
