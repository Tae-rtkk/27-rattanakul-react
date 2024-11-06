import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Admin from "./pages/Admin";
import User from "./pages/User";
import { useEffect, useState } from "react";

function App() {
  //สร้าง state ที่ไว้เก็บข้อมูลของ ชื่อ นามสกุล ที่อยู่ ละแปลงจาก string ธรรมดากากๆให้เป็น js obj ละจะเรียกผ่าน tableTasks  แต่ถ้าไม่มีข้อมูล ก็เก็บเป็น arr วางๆ
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tableTasks")) || []);

  // สร้าง Effect เอาข้อมูลจาก localStorage มาบันทึกค่าลงใน tableTasks และ แปลงกลับมาเป็น string กากๆไว้ใน tasks **เมื่อ Effect ทำงาน หรือ tasks ใน state มีการเปลี่ยนแปลง**
  useEffect(() => {
    localStorage.setItem("tableTasks", JSON.stringify(tasks))
  }, [tasks])

  // grab ที่รับส่ง ค่า ผ่าน props ที่มาจาก admim เอาไปเก็บไว้ใน state tasks ของเรา
  const onAddNewInfo = (infoperson) => {
    setTasks((prevTasks) => [...prevTasks, infoperson])
  }

  // ฟังก์ชั่น ฆาตกรโรคจิต ถ้้า admin ส่งเหยื่อ(taskId)มา ก็จะ filter ฆ่าทิ้งสะ
  const onDeleteInfo = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((info) => info.id !== taskId))
  }

  //ฟังก์ชั่นล้างโลก เมื่อกดปุ่ม ของทุกอย่างใน state tasks ก็จะ...   หายตัวววว
  const onDeleteAll = () => {
    setTasks([]);
  }

  //สร้าง router ที่มี Navbar ทุกหน้า ละก็ใส่ route 4 ตัว 4 pathไว้Link element คือ component แต่ละหน้า ละก็มีฟังชั่นต่างๆเช่น grap ฆาตกรโรคจิต ล้างโลก ละก็ตัวแปร state ชื่อ tasks โดย componentไหนอยากใช้ ฟังก์ชั่น อันไหนก็ส่งผ่าน props ไป
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/user" element={<User tasks={tasks} />} />
          <Route path="/admin" element={<Admin onAddInfo={onAddNewInfo} tasks={tasks} onDelete={onDeleteInfo} onDeleteAll={onDeleteAll} />} />
          <Route path='/owner' element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
