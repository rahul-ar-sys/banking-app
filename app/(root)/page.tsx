"use client";

import Head from 'next/head'
import React, { use } from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar';
import { LucideToggleLeft } from 'lucide-react';

const Home = () => {
    const loggedIn = {firstName : "John" , lastName : "Doe" , email : "johndoe@gmail.com"};

  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox 
                type="greeting"
                title="Welcome to Horizon"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your bank accounts efficiently"
            
            />
        

        <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.35}
        />
        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSideBar 
        user={loggedIn} 
        transactions={[]}
        banks={[
          { $id: '1', accountId: 'acc1', bankId: 'bank1', accessToken: 'token1', name: 'Bank 1', currentBalance: 1000 },
          { $id: '2', accountId: 'acc2', bankId: 'bank2', accessToken: 'token2', name: 'Bank 2', currentBalance: 250.35 }
        ]}
      
      />
    </section>
  )
}

export default Home