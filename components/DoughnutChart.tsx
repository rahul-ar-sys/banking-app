"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        
        datasets: [{
           label:'Banks',
           data:[12, 19, 3, 5, 2, 3],
           backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56'],

        }],
        labels: ["Bank1", "Bank2", "Bank3", "Bank4", "Bank5", "Bank6"]
    }
    return <Doughnut data={data} />
}

export default DoughnutChart