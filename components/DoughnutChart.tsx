"use client"

import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = () => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
        labels: ['Bank1', 'Bank2', 'Bank3', 'Bank4', 'Bank5', 'Bank6'],
    }

    return <Doughnut data={data} 
    options={{
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
        },
        cutout: '80%',
    }}/>
}

export default DoughnutChart
