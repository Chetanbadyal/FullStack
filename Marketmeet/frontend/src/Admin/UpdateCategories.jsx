import { useEffect, useState } from "react"
import apiServices from "../ApiServices/apiServices";
import { toast } from "react-toastify";


import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategories = () => {

  const[categoryName,setCategoryName] = useState("");
  const[description,setDescription]= useState("");
  const[imageName,setImageName] = useState("")
  const[categoryImage,setCategoryImage]= useState({});
  const[prevImage,setPrevImage]=useState("")
  const params = useParams();
  const id = params.id
const nav = useNavigate()
  useEffect(()=>{
    let data={
        _id:id
    }
      apiServices.getsingleCategoryData(data)
      .then((res)=>{
       setCategoryName(res.data.data.categoryName)
       setDescription(res.data.data.description)
       setPrevImage(res.data.data.categoryImage)
       
      })
      .catch((err)=>{
        toast.error(err.message)
        console.log(err)
      })
    },[])

  const handleImage = (e)=>{
    setCategoryImage(e.target.files[0])
    setImageName(e.target.value)
  }
  let updateData = (e)=>{
    e.preventDefault();

    let data = new FormData()//upload image
    data.append("categoryName",categoryName)
    data.append("categoryImage",categoryImage)
    data.append("description",description)
    data.append("_id",id)
    apiServices.updateCategoryData(data)
    .then((res)=>{
      toast.success(res.data.message)
      console.log(res.data.data)
      setTimeout(() => {
        nav("/admin/managecategories")
      }, 1000);
    })
    .catch((err)=>{
      toast.error("SOMETHING WENT WRONG")
      console.log(err)
    })
  }
    return(
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        UPDATE CATEGORIES
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              DASHBOARD
            </a>
          </li>
          
          
          <li className="breadcrumb-item text-white active" aria-current="page">
            UPDATE CATEGORIES
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
          className="col-lg-6 offset-md-3 contact-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4 text-center">UPDATE CATEGORIES</h1>
              
            </div>
            
            <form onSubmit={updateData}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Category Name"
                      value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}}
                    />
                    <label htmlFor="name">Category Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      placeholder="Upload Image"
                      onChange={handleImage}
                    />
                    <label htmlFor="email">Upload Image</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <img src={prevImage} height={200}/>
                  </div>
                </div>
               
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Enter Description"
                      id="message"
                      style={{ height: 100 }}
                      
                      value={description} onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    <label htmlFor="message">Enter Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

    )
}
export default UpdateCategories;
