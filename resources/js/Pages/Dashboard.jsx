import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Landing from '@/Components/LandingPage';
import You from './You';
import { useState } from 'react';
import InvestForm from './InvestForm';
import Investors from './Investors';
import AboutUs from './AboutUs';
import YourPage from './YourPage';
import { Head } from '@inertiajs/react';
import Invest from './Invest';
import Header from './Company/Header';


export default function Dashboard({ auth }) {
    const userIdparameter = auth.user.id
    const username = auth.user.name

    const [reload, setReload] = useState(false);

    const handleReload = () => {
        //console.log("relaod")
        //setReload(!reload); // Toggling the state to force re-render
        window.location.reload()
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Companies</h2>}
        >
        <div className="relative z-10 h-[580px]  bg-gradient-to-b from-stone-100 via-neutral-50 vie-zinc-50 to-gray-100  dark:grd" >
            <Landing></Landing>
        </div>  
            <You userIdparameter={userIdparameter} userName={username}></You>
            <AboutUs></AboutUs>
           
            <div className='dark:bg-stone-50 bg-gray-900 pt-5 pb-10'>
                    <h1 className="text-2xl text-center mb-8 mb-10 font-bold text-stone-50 dark:text-gray-900"> Out Top Investors</h1>
                <Investors></Investors>
            </div>
            <div className='py-10'>

                <InvestForm handleReload={handleReload}  userName={username} userId={userIdparameter}></InvestForm>
            </div>
        
        </AuthenticatedLayout>
    );
}
