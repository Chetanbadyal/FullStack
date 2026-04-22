export default function AdminFooter(){
    return(
        <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Address</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Services</h5>
          <a className="btn btn-link" href="">
            Business Security
          </a>
          <a className="btn btn-link" href="">
            Fire Detection
          </a>
          <a className="btn btn-link" href="">
            Alarm Systems
          </a>
          <a className="btn btn-link" href="">
            CCTV &amp; Video
          </a>
          <a className="btn btn-link" href="">
            Smart Home
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid py-4" style={{ background: "#000000" }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
          <br />
          Distributed By
          <a className="border-bottom" href="https://themewagon.com/">
            Themewagon
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
</>

    )
}