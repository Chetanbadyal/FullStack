import React, { useEffect } from 'react';
import apiServices from '../ApiServices/apiServices';
import { toast } from "react-toastify";
import { useState } from 'react';
const ManageServices = () => {
 const[serviceData,setServiceData]=useState([]);
 const[isDelete,setDeleteService]=useState(false);

    useEffect(()=>{
        apiServices.getServices()
        .then((res)=>{
            setServiceData(res.data.data)
            console.log(res.data.data)
        })
        .catch((err)=>{
            toast.error("something went wrong")
            console.log(err)
        })
            // .then((res) => {
            //     setServiceData(res.data.data)
            //     console.log(res.data.data)
            // })
            // .catch((err) => {
            //     toast.error("SOMETHING WENT WRONG")
            //     console.log(err)
            // })
    },[isDelete])

    var deleteData = (id)=>{
        setDeleteService(true)
        let data = {
            _id:id
        }

        apiServices.deleteService(data)
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(res.data.message)
        })
    }
  return (
         <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        MANAGE SERVICES
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    DASHBOARD
                                </a>
                            </li>


                            <li className="breadcrumb-item text-white active" aria-current="page">
                                MANAGE SERVICES
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-fluid bg-light overflow-hidden px-lg-0">
                <div className="container contact px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div
                            className="col-lg-12  contact-text py-5 wow fadeIn"
                            data-wow-delay="0.5s"
                        >
                            <div className="p-lg-5 ps-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4 text-center">MANAGE SERVICES HERE</h1>
                                </div>

                                <table >
                                    <thead>
                                        <tr className='bg-secondary text-white'>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Service Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Vender Id</th>
                                            <th scope='col'>Delete</th>
                                            <th scope='col'>Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {serviceData?.map((el,index)=>(
                                        <>
                                         <tr key={el._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.ServiceName}</td>
                                            <td>{el?.Price}</td>
                                            <td>{el?.description}</td>
                                            <td><img src={el?.ServiceImage} height={200}/></td>
                                            <td>{el?.VenderId}</td>
                                            <td><button className='btn btn-danger' onClick={()=>{deleteData(el?._id)}}>Delete</button></td>
                                            <td><button className='btn btn-primary'>Update</button></td>

{/* 
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>{deleteData(el?._id)}}>Delete</button>
                                            </td> */}
                                        </tr>
                                        </>
                                       ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

  );
}

export default ManageServices;
