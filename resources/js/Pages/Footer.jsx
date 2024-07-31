export default function Footer () {

    const currentYear = new Date().getFullYear()

    return (
        <div>
           
            <div className="w-full h-[40px] bg-slate-400 dark:bg-slate-800 flex justify-center mt-32">
                <a href="" className="text-white pt-4 text-[12px]"> All rights reserved &copy; Let Grow Together {currentYear} </a>
            </div>
        </div>
    )
}