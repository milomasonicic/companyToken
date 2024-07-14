import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import DarkModeToggle from '@/Components/DarkMode'; 

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex justify-between">
            <div className='absolute'>
                <DarkModeToggle></DarkModeToggle>
            </div>
            <div className='w-[100%] md:w-[60%] bg-gradient-to-t from-teal-50 dark:from-slate-900 dark:to-gray-800 flex items-center justify-center '>
                <div className='w-[95%] md:w-[480px] bg-white dark:bg-slate-900 px-4 py-12 rounded-lg shadow-lg'>
                    {children}

                </div>


            </div>

            <div className='hidden md:block md:w-[40%] bg-login dark:bg-darklogin bg-cover bg-center bg-gray-100 
            
            dark:bg-violet-800 flex items-center justify-center' >
                <div className=''></div>
            </div>
        </div>
    );
}

/*

flex flex-col md:flex-row  justify-center sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900*/

/*

<div className="sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
            </div> */
