import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';


export default function Invest({ auth }) {

    const [deposit, setDeposit] = useState()

    const handleDeposit = () => {

    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Invest</h2>}
        >
            <Head title="Invest" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div
                            className="w-[100%] md:w-[90%] flex flex-col md:flex-row
                            mx-auto 
                            bg-gradient-to-r from-indigo-50 via-stone-50 via-neutral-50 via-stone-50 to-indigo-50
                            h-[180px]
                            md:h-[120px]
                            flex items-center 
                            justify-center
                            rounded-b-2xl
                            "
                        >
                        <input type="text"
                        placeholder="Enter amount"
                        className="p-4 mr-2 ml-2 w-[190px] md:w-[240px]"
                        value={deposit}
                        onChange = {(e) => setDeposit(e.target.value)}
                        
                        />
                        <button 
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 w-[190px] md:w-[240px] mt-4 md:mt-0 "
                        onClick={handleDeposit}> Deposit</button>

                      </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
