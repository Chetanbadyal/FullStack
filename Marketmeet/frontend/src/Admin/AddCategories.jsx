import { useState } from "react"
import apiServices from "../ApiServices/apiServices";
import { toast } from "react-toastify";

export default function AddCategories(){
  const[categoryName,setCategoryName] = useState("");
  const[description,setDescription]= useState("");
  const[imageName,setImageName] = useState("")
  const[categoryImage,setCategoryImage]= useState({});

  const handleImage = (e)=>{
    setCategoryImage(e.target.files[0])
    setImageName(e.target.value)
  }
  let addData = (e)=>{
    e.preventDefault();

    let data = new FormData()//upload image
    data.append("categoryName",categoryName)
    data.append("categoryImage",categoryImage)
    data.append("description",description)

    apiServices.addCategory(data)
    .then((res)=>{
      toast.success(res.data.message)
      console.log(res.data.data)
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
        ADD CATEGORIES
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              DASHBOARD
            </a>
          </li>
          
          
          <li className="breadcrumb-item text-white active" aria-current="page">
            ADD CATEGORIES
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
              <h1 className="display-5 mb-4 text-center">ADD CATEGORIES</h1>
            </div>
            
            <form onSubmit={addData}>
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
                    Send Message
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