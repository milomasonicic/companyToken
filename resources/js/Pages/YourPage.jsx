import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PersonalTransactions from "./PersonalTransactions"
import { useState } from "react"

export default function YourPage({auth}){

    const [toogle, setToogle] = useState(false)

    async function toogleComponenet(){
        setToogle(prevToggle => !prevToggle)
      }

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