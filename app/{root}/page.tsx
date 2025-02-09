import Head from 'next/head'
import React from 'react'
import HeaderBox from '@/components/HeaderBox'


const Home = () => {
    const loggedIn = {firstname : "John", lastname : "Doe"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox 
                type="greeting"
                title="Welcome to Horizon"
                user={loggedIn?.firstname || "Guest"}
                subtext="Your modern banking platform"
            
            />
        </header>

        
      </div>
    </section>
  )
}

export default Home