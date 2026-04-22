import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
        <>
        <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5">
    <div className="row gx-4 d-none d-lg-flex">
      <div className="col-lg-6 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-map-marker-alt text-white" />
          </div>
          <small>123 Street, New York, USA</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-envelope-open text-white" />
          </div>
          <small>info@example.com</small>
        </div>
      </div>
      <div className="col-lg-6 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-phone-alt text-white" />
          </div>
          <small>+012 345 6789</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="far fa-clock text-white" />
          </div>
          <small>Mon - Fri : 9AM - 9PM</small>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
    <Link href="index.html" className="navbar-brand d-flex align-items-center">
      <h2 className="m-0">
        MARKET<span className="text-primary">MEET</span>
      </h2>
    </Link>
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-4 py-lg-0">
        <Link to={'/admin'} className="nav-item nav-link active">
          Dashboard
        </Link>
        <div className="nav-item dropdown">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Categories
          </Link>
          <div className="dropdown-menu rounded-0 rounded-bottom m-0">
            <Link to={'/admin/addcategories'} className="dropdown-item">
              Add Categories
            </Link>
            <Link to={'/admin/managecategories'} className="dropdown-item">
              Manage Categories
            </Link>
            
          </div>
        </div>
        <Link to={'/service'} className="nav-item nav-link">
          Service
        </Link>
        <Link href="project.html" className="nav-item nav-link">
          Project
        </Link>
        <div className="nav-item dropdown">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </Link>
          <div className="dropdown-menu rounded-0 rounded-bottom m-0">
            <Link href="feature.html" className="dropdown-item">
              Feature
            </Link>
            <Link href="quote.html" className="dropdown-item">
              Free Quote
            </Link>
            <Link href="team.html" className="dropdown-item">
              Our Team
            </Link>
            <Link href="testimonial.html" className="dropdown-item">
              Testimonial
            </Link>
            <Link href="404.html" className="dropdown-item">
              404 Page
            </Link>
          </div>
        </div>
        <Link to={'/admin/enquiries'} className="nav-item nav-link">
          Customer Enquiries
        </Link>
      </div>
      <div className="h-100 d-lg-inline-flex align-items-center d-none">
        <Link
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-twitter" />
        </Link>
        <Link
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-linkedin-in" />
        </Link>
        <Link
          className="btn btn-square rounded-circle bg-light text-primary me-0"
          href=""
        >
          <i className="fab fa-instagram" />
        </Link>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
</>

        
        </>
    )
}