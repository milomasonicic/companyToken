
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Partners ({auth}){

    return(
        <div>
            
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Companies</h2>}
        >
            Partners
           
        </AuthenticatedLayout>
        </div>
    )
}