import Head from 'next/head'
import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

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

        <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={0}
        />
      </div>
    </section>
  )
}

export default Home