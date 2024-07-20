import { Link } from "@inertiajs/react"
import Button from '@/Components/Button';
import Card from "@/Components/TransactionsCard";

export default function Landing(){

    return(
        <div className="max-w-7xl flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
            
            <h1 className="font-extrabold  mt-28 mb-2 text-4xl md:text-5xl text-teal-400 
            dark:text-neutral-50
            "> Let's grow together. </h1>
                <Button></Button>
            <div className="mt-20 flex gap-12">
                <Card></Card>
                <Card></Card>
        
            </div>    
        </div>
   
    
    )
}