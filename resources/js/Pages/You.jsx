
import abi from "./contract/Stocks.json"
import { useState, useEffect } from "react"
import ReactTypingEffect from "react-typing-effect";
import { ethers, formatUnits, JsonRpcProvider } from "ethers";

export default function You({userIdparameter, userName}){
    const [percentage, setPercentage] = useState()
    const [userBalance, setUserBalance] = useState()

        /*percentage*/
    async function handlepercentage(percentageOwn) {
        try{
        
            await axios.post('http://company.test/api/percentage', {
                percentage: percentageOwn,
                user_id: userIdparameter
            })


        } catch(error) {
            console.error("posting", error);
        }

    }

     /* rpc */   
    
     async function getContractInfo(){

        try{

        const provider = new ethers.JsonRpcProvider('http://localhost:8545')
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        const contractABI = abi.abi

        const contract = new ethers.Contract(contractAddress, contractABI, provider)
        const totalSupply = await contract.totalSupply()
        console.log(totalSupply, "total sup iz funkcije")

       

        const getUserTokenBalance = await contract.getUserTokenBalance(userIdparameter)
        console.log(getUserTokenBalance)

        const symbol = await contract.symbol()
        console.log(symbol)

        const formattedtotalSupply = (parseFloat(totalSupply) / Math.pow(10, 18)).toFixed(2);

        const formattedTokenBalance = (parseFloat(getUserTokenBalance) / Math.pow(10, 18)).toFixed(2);
       

        
        const userBalance = `${formattedTokenBalance} ${symbol}`
        setUserBalance(userBalance)
        
        console.log(formattedtotalSupply, formattedTokenBalance, "balance")

        const ownerPercentage = (formattedTokenBalance/formattedtotalSupply) * 100;
        
        
        handlepercentage(ownerPercentage)

        

        }catch(error){
            console.error("Error", error)
        }

    }

   
    useEffect(()=>{
        getContractInfo()
    },[])



    return(
        <div className="max-w-7xl flex h-[300px] mx-auto sm:px-6 py-4 mb-8 lg:px-8">

        <div className="mt-10 w-[90%] flex flex-col  mx-auto   
                
                h-[50px] md:h-[50px]">
                <h1 className="text-teal-400 dark:text-violet-400 
                font-bold capitalize 
                py-1
                text-lg pl-4"> Hello <span className="text-2xl text-violet-400 dark:text-yellow-400 
                italic underline-offset-8" > {userName}</span></h1>
         
                <div className="ml-4">
                    <ReactTypingEffect
                        text={["How can we help you?"]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={400}
                        cursorRenderer={cursor=> <h1 className="text-3xl">{cursor}</h1>}

                        displayTextRenderer={(text, i) =>{
                            return(
                                <h1> 
                                    {text.split('').map((char, i) => {
                                        return(
                                            
                                            <span key={i} className="text-xl 
                                            text-teal-400 dark:text-violet-400 
                                            font-bold 
                                            py-1
                                            text-lg 
                                            
                                            ">
                                                {char}
                                            </span>

                                            
                                        )

                                    })}
                                </h1>
                            )
                        }}
                    >

                    </ReactTypingEffect>

                </div>
            

        </div>

        </div>
    )
}