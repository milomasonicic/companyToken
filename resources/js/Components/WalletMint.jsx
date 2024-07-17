
import { SiEthereum } from "react-icons/si";

export default function WalletMint({adr}){
    const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

    return(
        <div className="p-6 flex justify-end 
        items-start flex-col 
           w-full 
           h-[125px]
        bg-teal-400
        dark:bg-violet-400
        ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10  rounded-full 
                border-2 border-white dark:border-yellow-400
                flex justify-center items-center">
                  <SiEthereum fontSize={21}  className="text-white dark:text-yellow-400" />
                </div>
                
              </div>
              <div>
                <p className="md:hidden text-white dark:text-yellow-400  mt-2 text-sm">
                    {shortenAddress(adr)}  
                </p>

                <p className="hidden md:block text-white dark:text-yellow-400 mt-2 text-sm">
                    {adr}  
                </p>
              
              </div>
            </div>
          </div>
       
    )
}

/*
{shortenAddress(currentAccount)}
<BsInfoCircle fontSize={17} color="#fff" />
<SiEthereum fontSize={21} color="#fff" />
 <div className="
        md:w-[90%]
        w-[100%]
        mx-auto
        p-4
        rounded-md mt-2 h-[100px] bg-neutral-50 shadow-md ">
            <h4>Wallet:</h4>
            <p class="break-words ...">    {adrs}</p>
        </div>

*/