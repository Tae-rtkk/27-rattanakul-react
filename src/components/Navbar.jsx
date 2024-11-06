import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    // Navbar กากๆ เข้ามาดูทำไมเนี่ย เขินนะ ก็มีแค่ Link 2 อันไว้ไปหน้า Home กับ Owner **ใส่ to ให้ตรงกะ path ด้วยนะจ๊ะ**
    return (
        <nav className=' flex text-center justify-end p-2 text-xl font-bold bg-gray-100 border-black gap-4 border-b'>
            <Link to='/' className='bg-black text-white m-2 p-2 px-4 rounded-xl text-base font-bold shadow-md hover:bg-white hover:text-black'>Home</Link>
            <Link to='/owner' className='bg-black text-white m-2 p-2 px-4 rounded-xl text-base font-bold shadow-md hover:bg-white hover:text-black'>Owner</Link>
        </nav>
    )
}

export default Navbar
