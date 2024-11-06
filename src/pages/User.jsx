import React from 'react'
import { Link } from 'react-router-dom'

// รับ state tasks เข้ามาผ่าน props 
const User = ({ tasks }) => {
    return (
        <div className='bg-gray-100 border flex flex-col text-center h-lvh'>
            <h1 className='text-5xl mt-20 font-bold'>Generation Thailand</h1><br />
            <h1 className='text-5xl font-bold'>Home - User Sector</h1>

            <div className='mt-20'>
                {/* Link 2 ตัว ให้ตรงกะ path ที่ตั้งไว้ด้วยนะจ๊ะ */}
                <Link to='/user' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>User Home Sector</Link>
                <Link to='/admin' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>Admin Home Sector</Link>
            </div>

            <table className='w-auto flex flex-col mt-20 justify-center px-40 mx-80'>
                <tr className='bg-gray-100 grid grid-cols-3 '>
                    <th className='border border-gray-300 w-full text-sm p-2'>Name</th>
                    <th className='border border-gray-300 w-full text-sm p-2'>Last Name</th>
                    <th className='border border-gray-300 w-full text-sm p-2'>Position</th>
                </tr>
                {/* เอา state tasks ที่มี ชื่อ นามสกุล ที่อยู่ มา .map สะละส่งฝาแฝดชื่อ task ไปแทน*/}
                {tasks.map((task) => (
                    <tr className='bg-white grid grid-cols-3 '>
                        {/* ใส่ข้อมูลลงไปสะ */}
                        <td className='border border-gray-300 w-full text-sm p-2 '>{task.name}</td>
                        <td className='border border-gray-300 w-full text-sm p-2 '>{task.lastName}</td>
                        <td className='border border-gray-300 w-full text-sm p-2 '>{task.position}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default User
