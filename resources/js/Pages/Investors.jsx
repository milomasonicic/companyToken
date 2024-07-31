//import { Chart } from "react-google-charts";
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, LabelList } from 'recharts';
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
            }, 15440);
            return () => clearInterval(interval);
    },[])


    const CustomLabel = (props) => {

        const {x, y, width, value} = props
        return(
            <text 
                
               x={x + width /2} 
               y={y + 40}
               fill='#f9fafb'
               style={{cursor:'pointer'}}
               textAnchor='middle'
            className="font-bold text-lg"
               
              
            >
                {value}
            </text>
        )
    }


    return(

        <div className="w-[90%] md:w-[45%] mx-auto h-[450px] bg-transparent">

    <ResponsiveContainer width="100%" height="95%">
        <BarChart width={150} height={40} data={data} barSize={125}>
              
          <Bar dataKey="percentage" 
          height={"100px"}
          radius={[30, 35, 0, 0]}
          fill="#8884d8">
          <LabelList dataKey="name" content={<CustomLabel/>}></LabelList>
          </Bar>
        </BarChart>
      </ResponsiveContainer>         

        </div>
    )

}

