import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-gray-100 border flex flex-col text-center h-lvh'>
            <h1 className='text-5xl mt-20 font-bold'>Generation Thailand</h1><br />
            <h1 className='text-5xl font-bold'>React - Assessment</h1>
            <div className='mt-20'>
                {/* Link 2 ตัว ให้ตรงกะ path ที่ตั้งไว้ด้วยนะจ๊ะ */}
                <Link to='/user' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>User Home Sector</Link>
                <Link to='/admin' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>Admin Home Sector</Link>
            </div>
        </div>
    )
}

export default Home
