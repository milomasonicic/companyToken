import Transaction from "@/Components/Transaction"
import axios from "axios"
import { useEffect, useState } from "react"


export default function PersonalTransactions({userId}){

    const [state, setState] = useState([])
    const userIdd = userId
    console.log(userId)
    
    async function fetchData() {
        const response = await axios.get(`http://company.test/api/your/${userId}`)
        setState(response.data)
    }
 


    useEffect(()=>{

        fetchData()
        
    },[])

    console.log(state)
    return(
        <div className="w-[90%] mx-auto">
            { 
                state.map((transaction) => (
                    <div key={transaction.id}>
                        <Transaction
                        amount={transaction.amount}
                        time={transaction.formatted_created_at}
                        ></Transaction>
                    </div>
                ))
            }

        </div>
    )
}


    