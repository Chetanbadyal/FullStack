import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import First from './Practice/First'
import Hooks from './Practice/Hooks'
import Login from './Practice/Login'
import { ToastContainer } from 'react-toastify'
import Header from './Layout/User/Header'
import Home from './User/Home'
import Footer from './Layout/User/Footer'
import About from './User/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Layout/User/Master'
import Contact from './User/Contact'
import AdminMaster from './Layout/Admin/AdminMaster'
import Dashboard from './Admin/Dashboard'
import PracticeProps from './Practice/Practice_Props'
import MyClass from './MyClass'
import AddCategories from './Admin/AddCategories'
import ManageCategories from './Admin/ManageCategories'
import VendorMaster from './Layout/Vendor/VendorMaster'
import DashboardVendor from './Vendor/DashboardVendor'
import AddService from './Vendor/AddService'
import ManageServices from './Vendor/ManageServices'
import Enquiries from './Admin/Enquiries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   
      <BrowserRouter>
      <Routes>
        {/* User */}
        <Route path='/' element={<Master/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
        {/* Admin */}
        <Route path='/admin' element={<AdminMaster/>}>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/addcategories' element={<AddCategories/>}/>
          <Route path='/admin/managecategories' element={<ManageCategories/>}/>
          <Route path='/admin/enquiries' element={<Enquiries/>}/>

        </Route>
        {/* Vender */}
        <Route path='/vendor' element={<VendorMaster/>}>
        <Route path='/vendor' element={<DashboardVendor/>}/>
        <Route path='/vendor/addservice' element={<AddService/>}/>
        <Route path='/vendor/manageservice' element={<ManageServices/>}/>


        </Route>
      </Routes>
      </BrowserRouter>








      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
