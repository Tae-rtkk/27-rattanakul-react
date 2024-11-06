import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

// รับ props ที่มาจาก App มี state tasks , ฟังก์ชั่นฆาตกรโรคจิต , ฟังชั่นล้างโลก ส่วน onAddInfo เราส่งเป็น props จากหน้านี้ไปหน้า App นะที่มี ข้อมูล id ชื่อ นามสกุล ที่อยู่
const Admin = ({ onAddInfo, tasks, onDelete, onDeleteAll }) => {

    //สร้าง state มา 3 ตัวเลยไว้เก็บ input ทั้ง 3 ช่อง
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");

    //ฟังก์ชั่น submit(ยำ) ที่รับ event มาด้วย ละก็กำหนด ให้event นี้ไม่ต้อง refresh หน้าใหม่นะ ละก็เงื่อนไข ถ้า ชื่อ นามสกุล ที่อยู่ ที่มีของเนี่ยถ้าจริงก็ สร้าง callback ฟังก์ชั่นขึ้นมาที่มี id(idผมตั้งเป็นวันเอานะ) ชื่อ นามสกุล ที่อยู่ ละก็ set ค่าทุกอย่างให้กลับมาว่างไว้เฉพาะพวก ชื่อ นามสกุล ที่อยู่ นะ
    const submit = (event) => {
        event.preventDefault()
        if (name.trim() && lastName.trim() && position.trim()) {
            onAddInfo({ id: Date.now(), name, lastName, position });
            setName("");
            setLastName("");
            setPosition("");
        }

    }

    return (
        <div className='bg-gray-100 border flex flex-col text-center h-lvh'>
            <h1 className='text-5xl mt-20 font-bold'>Generation Thailand</h1><br />
            <h1 className='text-5xl font-bold'>Home - Admin Sector</h1>

            <div className='mt-20'>
                {/* Link 2 ตัวเหมือนเดิม มีทุกหน้า */}
                <Link to='/user' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>User Home Sector</Link>
                <Link to='/admin' className='p-3 bg-white rounded-md mx-12 text-base font-bold shadow-md'>Admin Home Sector</Link>
                <Outlet />
            </div>
            {/* เมื่อมีการแจ้งเตือนมาจากปุ่ม submit ให้ไปเรียกใช้ ฟังก์ชั่น submit(ยำ) */}
            <form onSubmit={submit} className='flex text-center w-full justify-center mt-20'>
                <input
                    type="text"
                    placeholder='Name'
                    className='text-lg m-4 p-2 rounded-md shadow-lg border border-gray-300'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                // input name มีค่า value ไปเก็บไว้ใน state name แต่ onchange ไว้ดักจับช่อง input ละก็จะเอาข้อมูลไปฟ้องกับ setname เพื่อให้ setname ไปบอก name ในstate 
                />
                <input
                    type="text"
                    placeholder='Last Name'
                    className='text-lg m-4 p-2 rounded-md shadow-lg border border-gray-300'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                // เหมือนกับ name เลย
                />
                <input
                    type="text"
                    placeholder='Position'
                    className='text-lg m-4 p-2 rounded-md shadow-lg border border-gray-300'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                // เหมือนกับ lastname เลย
                />
                {/* ปุ่มsubmit ไว้แจ้งเตื่อน form ว่ามีคนมากดปุ้มแล้วโว้ย */}
                <button type='submit' className='bg-black text-white m-4 px-4 py-1 rounded-3xl font-bold shadow-md'>ADD</button>
            </form>

            <p className='font-bold text-xl mt-8'>Create User Here</p>

            <table className='mx-80 mt-8'>
                <tr className='bg-gray-100 grid grid-cols-4'>
                    <th className='border border-gray-300 w-full text-sm p-2'>Name</th>
                    <th className='border border-gray-300 w-full text-sm p-2'>Last Name</th>
                    <th className='border border-gray-300 w-full text-sm p-2'>Position</th>
                    <th className='border border-gray-300 w-full text-sm p-2'>Action</th>
                </tr>
                {/* อันนี้เงื่อนไข ถ้า tasks มีของไม่มีของจะให้ทำอะไร */}
                {tasks.length === 0 ? (
                    <tr></tr>
                ) : (
                    // เอา state tasks ที่มี ชื่อ นามสกุล ที่อยู่ มา .map สะละส่งฝาแฝดชื่อ task ไปแทน
                    tasks.map((task) => (
                        <tr key={task.id} className='bg-white grid grid-cols-4'>
                            <td className='border border-gray-300 w-full text-sm p-2 '>{task.name}</td>
                            <td className='border border-gray-300 w-full text-sm p-2'>{task.lastName}</td>
                            <td className='border border-gray-300 w-full text-sm p-2'>{task.position}</td>
                            {/* ใส่่ข้อมูลงไปสะ และก็มีปุ่ม ส่ง id ไปหา ฆาตกรโรคจิต 55555555*/}
                            <button onClick={() => onDelete(task.id)} className='border border-gray-300 w-full text-sm text-red-600 text-center'>Delete</button>
                        </tr>
                    ))
                )
                }
            </table >
            <div>
                {/* ปุ่มฟังชั่นล้างโลก */}
                <button onClick={onDeleteAll} className='bg-red-800 text-white m-8 px-4 py-2 rounded-3xl font-bold shadow-xl hover:bg-red-900'>Delete All</button>
            </div>

        </div>
    )
}

export default Admin