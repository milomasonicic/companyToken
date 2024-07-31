import { Link } from "@inertiajs/react"
import Button from '@/Components/Button';
import Card from "@/Components/TransactionsCard";
import InvestorCard from "./InvestorsCard";

export default function Landing({handleScroll}){

    return(
        <div className="max-w-7xl  flex  flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
            
            <h1 className="font-extrabold  mt-28 mb-2 text-4xl md:text-5xl text-teal-400 
            dark:text-neutral-50
            "> Let's grow together. </h1>
               <button className="brutal-btn-light dark:brutal-btn-dark" onClick={handleScroll}> Explore </button>
                
            <div className="mt-20 flex flex-col md:flex-row gap-12">
                <Card></Card>
                <InvestorCard></InvestorCard>
        
            </div>    
        </div>
   
    
    )
}

