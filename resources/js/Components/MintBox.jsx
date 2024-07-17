export default function MintBox(){

    return(
        <div className='w-[70%] mx-auto flex justify-between p-6'>

        <div className='w-[150px] h-[100px] '>  
            <div className="h-[30%] border-b-4 border-blue-500"> Share Token Amount </div>
            <div className="h-[70%] "> 
                <h1 className="text-gray-900  ">
                Token Price
                </h1>
            </div>
        </div>


        <div className='w-[150px] h-[100px] '>  
            <div className="h-[30%] border-b-4 border-blue-500"> Deposit in ETH </div>
            <div className="h-[70%] "> 
                <h1 className="text-gray-900  ">
                Token Price
                </h1>
            </div>
        </div>


        <div className='w-[150px] h-[100px] '>  
            <div className="h-[30%] border-b-4 border-blue-500"> Share Token Amount </div>
            <div className="h-[70%] "> 
                <h1 className="text-gray-900  ">
                Share Token Amount
                </h1>
            </div>
        </div>

    </div>
    )
}