import React, { useEffect, useState } from 'react';
import '../../css/app.css'

const DarkModeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false
    })


    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    //style

    return(
        <div className='w-[100%]  bg-white dark:bg-gray-900'>
        <div className="max-w-7xl mx-auto py-2  sm:px-6 lg:px-8 flex justify-end  bg-white dark:bg-gray-900">
                <label onChange={toggleDarkMode} class="switch">
                     <input type="checkbox" />
                     <span class="slider round"></span>
                 </label>
        
        </div>

        </div>
    )
}

export default DarkModeToggle
