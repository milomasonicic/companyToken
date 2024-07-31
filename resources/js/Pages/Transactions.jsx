import Transaction from "@/Components/Transaction"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Transactions(){

    const [state, setState] = useState([])
    async function fetchData() {
        const response = await axios.get('http://company.test/api/recent')
        setState(response.data)
    }
 


    useEffect(()=>{

        fetchData()
        
    },[])

    return(
        <div className="w-[90%] mx-auto">

           
            { state.length > 0 ? (
                    state.map((transaction) => (
                        <div key={transaction.id}>
                            <Transaction name={transaction.user.name}
                            amount={transaction.amount}
                            time={transaction.formatted_created_at}
                            ></Transaction>
                        </div>
                    ))
            ): (
                <p className="mx-auto text-gray-800 text-lg 
                my-24
                
                font-bold text-center
                dark:text-yellow-400 ">
                    "No transactions in last 24 hours." 
                </p>
            )}


            
        </div>
    )
}

/*

 {state.length > 0 ? (
                state.map((transaction) => (
                    <div key={transaction.id}>
                        <p>Transaction ID: {transaction.id}</p>
                        <p>User ID: {transaction.user.name}</p>
                        <p>Amount: {transaction.amount}</p>
                        <p>Date: {transaction.created_at}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No transactions found.</p>
            )} */