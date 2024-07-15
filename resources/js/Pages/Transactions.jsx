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
        <div>

            <div>
                <Transaction name={"milo"} amount={22} time={222} ></Transaction>
            </div>
            { state.length > 0 ? (
                    state.map((transaction) => (
                        <div key={transaction.id}>
                            <Transaction name={transaction.user.name}
                            amount={transaction.amount}
                            time={transaction.created_at}
                            ></Transaction>
                        </div>
                    ))
            ): (
               "No transactions" 
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