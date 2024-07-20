//import { Chart } from "react-google-charts";
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import { useEffect, useState } from "react";
import axios from "axios"

export default function Investors(){

    const[dataArey, setdataArey] = useState([])

    const data = dataArey.map((investor, index ) => ({

        name: investor.user.name,
        percentage: investor.percentage,
        fill: index === 0 ? '#1f77b4': index === 1 ? '#1ff70e':'#2ca02c' 
    }))
    

    async function fetchInvestorInfo() {

        try{
            const response = await axios.get('http://company.test/api/top-owners')
            setdataArey(response.data)

        } catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchInvestorInfo()
            }, 440);
            return () => clearInterval(interval);
    },[])


    return(

        <div className="w-[90%] md:w-[45%] mx-auto h-[450px] bg-transparent">

    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data} barSize={125}>
          <XAxis dataKey='name'></XAxis>
          <Bar dataKey="percentage" 
          radius={[5, 5, 0, 0]}
          fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

            

        </div>
    )

}

/*

    <Chart
            width="100%"
            height="100%"
            chartType="ColumnChart"
        
            data={data}
            options={{
                backgroundColor:'transaprent',
                hAxis: {title: 'Investors'},
                vAxis: {title: 'Ownership Percentage'},
                legend: "none",
                chartArea:{width:'70%'},
                colors:['#1f77b4', '#ff7f0e', '#2ca02c'],
                animation: {
                    startup: true,
                    easing: "linear",
                    duration: 1500,
                  },
            }}
           
            >*/