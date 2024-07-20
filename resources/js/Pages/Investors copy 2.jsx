import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Investors(){

    const[dataArey, setdataArey] = useState([])

    const data = [
        ["Top Investor", "Percentage", {role:"style"}],
        ...dataArey.map((investor, index ) => 
        [investor.user.name, investor.percentage, 
        `color: ${index === 0 ? '#1f77b4': index === 1 ? '#1ff70e' : '#2ca02c'  }`]
        )
    ]

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
            }, 20440);
            return () => clearInterval(interval);
    },[])


    return(

        <div className="w-[55%] mx-auto h-[450px] dark:bg-gray-700 bg-stone-100">

        <h1>RECHARST IPAK</h1>

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
           
            >

            </Chart>

        </div>
    )

}