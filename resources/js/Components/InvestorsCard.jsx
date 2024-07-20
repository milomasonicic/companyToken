import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";


export default function InvestorCard(){
    const [numberTrans, setNumberTrans] = useState("")

    
    async function fetch() {
        try{
        
          const fetchNum =  await axios.get('http://company.test/api/investors')
           //setState(fetchNum) 
           setNumberTrans(fetchNum.data)
           
        } catch(error) {
            console.error("posting", error);
        }

    }

    useEffect(()=>{
        fetch()
    }
    ,[])

    const ownNum = Number(numberTrans)
    const props = useSpring({ 
        from: {number: 0}, 
        number: ownNum, 
        delay: 100, 
        config:{duration: 1000}})
    



    return(
        <div className="w-[150px] h-[150px] border 
        border-2
        flex
        flex-col
        justify-center
        border-color-white">
            
            <h1 className="
            text-gray-900
            dark:text-yellow-400
            font-extrabold
            text-center
            text-4xl">
            <animated.span>
            {props.number.to(n=> n.toFixed(0))}
            </animated.span>  
            </h1>
            <h2 className="text-center
            text-gray-900
            dark:text-yellow-400
            font-extrabold
            text-xl">
                Investors
            </h2>

        </div>
    )

}