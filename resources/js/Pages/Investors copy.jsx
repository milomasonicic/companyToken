import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";



export default function Investors(){

    const [dataArey, setdataArey] = useState([])
    

    const data = [
        ["Investor", "Percentage", { role: "style" }],
        ...dataArey.map((investor, index) => [investor.user.name, investor.percentage, `color: ${index === 0 ? '#1f77b4' : index === 1 ? '#ff7f0e' : '#2ca02c'}`])
    ];

    async function fetchInvestorInfo(){

        try{
        
            const response = await axios.get('http://company.test/api/top-owners')
            setdataArey(response.data)
           


        } catch(error) {
            console.error("posting", error);
        }

    }

   
    useEffect(()=>{
        fetchInvestorInfo()
    },[])

   

    return(
        <div className="w-[65%] mx-auto h-[450px]  dark:bg-gray-700 bg-stone-100 ">
            
           
            
            <Chart
                width="100%"
                height="100%"
                chartType="ColumnChart"
                
                loader={<div>Loading Chart...</div>}
                data={data}
                options={{
                    title: 'Top 3 Investors',
                    backgroundColor: 'transparent',
                    
                    chartArea: { width: '70%' },
                    colors: ['#1f77b4', '#ff7f0e', '#2ca02c'], // Custom colors
                    
                }}
            />

            
        </div>
    )
}