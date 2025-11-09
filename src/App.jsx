import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Message from './components/Message/Message';
import Flavors from './components/Flavors/Flavors';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
    <Navbar/>
    <Hero/>
    <Message/>
    <Flavors/>
    <div className="h-dvh border border-amber-500"></div>
    </main>
  )
}

export default App
