import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PersonalTransactions from "./PersonalTransactions"
import abi from "./contract/Stocks.json"
import { useState, useEffect } from "react"
import { ethers, formatUnits, JsonRpcProvider } from "ethers";

export default function YourPage({auth}){

    const [toogle, setToogle] = useState(false)
    const [percentage, setPercentage] = useState()
    const [userBalance, setUserBalance] = useState()

    async function toogleComponenet(){
        setToogle(prevToggle => !prevToggle)
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

        const userIdparameter = auth.user.id
        console.log(userIdparameter)

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
        setPercentage(ownerPercentage)

        

        }catch(error){
            console.error("Error", error)
        }

    }

   
    useEffect(()=>{
        getContractInfo()
    },[])




    /* rpc */

    return(
        <div>
            <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Invest</h2>}
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div className="mt-10 w-[90%] flex flex-col justify-center  mx-auto bg-white  
                        shadow-md
                        dark:bg-gray-600 overflow-hidden shadow-sm sm:rounded-lg h-[150px] md:h-[160px]">

                     <div className="bg-red-300 h-[60px]">
                        <img src="" alt="" />
                    </div>  

                    <div className="flex flex-col justify-center"> 
                        <h1 className="text-teal-400 dark:text-yellow-400 font-bold capitalize text-lg pl-4"> {auth.user.name}</h1>
                    </div>
                    
                    <div className="flex flex-col justify-center"> 
                        <h1 className="text-teal-400 dark:text-yellow-400 font-bold capitalize text-lg pl-4"> {percentage}</h1>
                    </div>
                    
                    <div className="flex flex-col justify-center"> 
                        <h1 className="text-teal-400 dark:text-yellow-400 font-bold capitalize text-lg pl-4"> {userBalance}</h1>
                    </div>

                </div>

                <div className="w-[90%] mx-auto" >
                <button 
                    className=" 
                    mx-auto  
                    h-[70px] w-[80%] mt-4 mb-5"
                    onClick={toogleComponenet}> 
                    
                    {
                    toogle ? 
                    <p className="pl-6 border-b-4 border-teal-400 dark:border-violet-400 text-left text-base text-teal-400 dark:text-violet-500 text-base font-bold">
                        Close
                    </p>
                    :
                    <p className="pl-6 border-b-4 border-teal-400 dark:border-violet-400 text-left text-base text-teal-400 dark:text-violet-500 text-base font-bold">
                        See All Your Transactions
                    </p>
                    }
                    </button>
                </div>
                {toogle ? (
                    <PersonalTransactions userId={auth.user.id}></PersonalTransactions>

                ): (
                    " "
                )}
            </div>


        </AuthenticatedLayout>
        </div>
    )
}


/*

  <div className="mt-20 w-[100%]">
            <div className="w-[90%] flex flex-justify-center mx-auto">
            <button 
            className=" 
            mx-auto  
            h-[70px] w-[80%] mt-4 mb-5"
            onClick={toogleComponenet}> 
            
            {
              toogle ? 
              <p className="pl-6 font-mono border-b-4 text-left text-lg text-neutral-700 text-base font-bold">
                Close
              </p>
              :
              <p className="pl-6 font-mono border-b-4 text-left text-lg text-neutral-700 text-base font-bold">
                See More Info
              </p>
            }
            </button>




*/