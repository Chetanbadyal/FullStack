import { useEffect, useState } from "react"
import apiServices from "../ApiServices/apiServices";
import { toast } from "react-toastify";

export default function Enquiries() {
    const [EnquiryData, setEnquiryData] = useState([]);
    // const[isDelete,setIsDelete]=useState(false);

    useEffect(()=>{
        apiServices.getEnquiries()
            .then((res) => {
                setEnquiryData(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => {
                toast.error("SOMETHING WENT WRONG")
                console.log(err)
            })
    })

    // var deleteData = (id)=>{
    //     setIsDelete(true)
    //     let data = {
    //         _id:id
    //     }

    //     apiServices.deleteCategory(data)
    //     .then((res)=>{
    //         toast.success(res.data.message)
    //         setIsDelete(false)
    //     })
    //     .catch((err)=>{
    //         toast.error(res.data.message)
    //         console.log(err)
    //     })
    // }

    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Enquiry page
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">
                                    DASHBOARD
                                </a>
                            </li>


                            <li className="breadcrumb-item text-white active" aria-current="page">
                                Customer Enquiries
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
                                    <h1 className="display-5 mb-4 text-center">Customer Enquiries</h1>
                                </div>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">email</th>
                                            <th scope="col">subject</th>
                                            <th scope="col">Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {EnquiryData?.map((el,index)=>(
                                        <>
                                         <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.name}</td>
                                            <td>{el?.email}</td>
                                            <td>{el?.subject}</td>
                                            <td>{el?.message}</td>
                                            {/* <td>
                                                <button className="btn btn-danger" onClick={()=>{deleteData(el?._id)}}>Delete</button> */}
                                            {/* </td> */}
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

    )
}