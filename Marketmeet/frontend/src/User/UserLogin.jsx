import { useState } from "react"
import apiServices from "../ApiServices/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserLogin(){
  const[email,setEmail]= useState("");
  const[password,setPassword] = useState("");
    const nav = useNavigate();
  let handleLogin = (e)=>{
    e.preventDefault();

    let data = {
      email:email,
      password:password
    } 


    apiServices.login(data)
    .then((res)=>{
        sessionStorage.setItem("token",res.data.token)
        sessionStorage.setItem("userId",res.data.data.userId)
        console.log("token value is",res.data.token)
      if(res.data.data.userType===1){
        toast.success(res.data.message)
        setTimeout(() => {
            nav('/admin')
        }, 1000);
      }
      else if(res.data.data.userType===2){
        sessionStorage.setItem("vendorId",res.data.data.vendorId)
        toast.success(res.data.message)
         setTimeout(() => {
            nav('/vendor')
        }, 1000);
      }
      else if(res.data.data.userType===3){
        sessionStorage.setItem("customerId",res.data.data.customerId)
        toast.success(res.data.message)
         setTimeout(() => {
            nav('/')
        }, 1000);
      }
      else{
        toast.error(res.data.message)
      }
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
        Login
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Login
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
            <div className="section-title text-center">
              <h1 className="display-5 mb-4">Login Now</h1>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label htmlFor="name">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label htmlFor="email">Your Password</label>
                  </div>
                </div>
               
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Login
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