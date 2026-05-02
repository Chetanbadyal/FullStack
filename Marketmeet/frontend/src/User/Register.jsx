import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiServices from '../apiServices/apiServices';

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [Loading, setLoading] = useState(false)
  const [Display, setDisplay] = useState("block")

  const nav = useNavigate()

  const addData = (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      password: password,
      contact: contact,
      address: address

    }
    setLoading(true)
    setDisplay("none")

    apiServices.Register(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setTimeout(() => {
            nav("/Login")
          }, 2000)
        }
        else {
          toast.error(res.data.message)
          setTimeout(() => {
            setLoading(false)
            setDisplay("block")
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message)
        setTimeout(() => {
          setLoading(false)
          setDisplay("block")

        }, 1000);
      })

  }


  return (
    <>
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
        <div className="w-50 w-md-50 w-lg-40 w-xl-35">
          <div className="form-wrapper card shadow-lg p-5">
            {/*Section Title  */}
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle section-tittle-f text-center mb-70">
                  <h2>Register</h2>
                </div>
              </div>
            </div>
            {/*End Section Title  */}
            <form id="register-form" action="#" method="POST" onSubmit={addData}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="form-box user-icon mb-30 text-center">

                    <input className="form-control w-100 mx-auto d-block" type="text"
                      name="name"
                      placeholder="Full Your Name"
                      value={name}
                      onChange={(e) => { setname(e.target.value) }} required />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-box email-icon mb-30 text-center">
                    <input className="form-control w-100 mx-auto d-block"
                      type="email"
                      name="email"
                       placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => { setemail(e.target.value) }} required />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-box lock-icon mb-30 text-center">
                    <input className="form-control w-100 mx-auto d-block"
                      type="password"
                      name="password"
                       placeholder="Full Your Password"
                      value={password}
                      onChange={(e) => { setpassword(e.target.value) }} required />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-box lock-icon mb-30 text-center">
                    <input className="form-control w-100 mx-auto d-block"
                      type="text"
                      name="contact"
                       placeholder="Full Your Contact"
                      value={contact}
                      onChange={(e) => { setcontact(e.target.value) }} required />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-box lock-icon mb-30 text-center">
                    <input className="form-control w-100 mx-auto d-block"
                      type="text"
                      name="address"
                        placeholder="Full Your Address"
                      value={address}
                      onChange={(e) => { setaddress(e.target.value) }} required />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="submit-info">
                    <button className="submit-btn2 btn btn-primary w-100 mx-auto d-block" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
