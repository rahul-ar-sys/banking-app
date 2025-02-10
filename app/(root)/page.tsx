"use client";

import Head from 'next/head'
import React, { use } from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = {firstname : "John"};

  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox 
                type="greeting"
                title="Welcome to Horizon"
                user={loggedIn?.firstname || 'Guest'}
                subtext="Access and manage your bank accounts efficiently"
            
            />
        </header>

        <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  )
}

export default Home