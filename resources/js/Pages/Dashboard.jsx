import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Landing from '@/Components/LandingPage';
import { Head } from '@inertiajs/react';
import Header from './Company/Header';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Companies</h2>}
        >
        <div className="relative z-10 h-[580px]  bg-gradient-to-b from-stone-100 via-neutral-50 vie-zinc-50 to-gray-100  dark:grd" >
            <Landing></Landing>
           
        </div>   
        </AuthenticatedLayout>
    );
}
