export default function Dashboard(){
    return(
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        WELCOME ADMIN
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
            Dashboard
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Facts Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
          <div className="h-100 bg-dark p-4 p-xl-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div
                className="btn-square rounded-circle"
                style={{ width: 64, height: 64, background: "#000000" }}
              >
                <img
                  className="img-fluid"
                  src="img/icon/icon-3.png"
                  alt="Icon"
                />
              </div>
              <h1 className="display-1 mb-0" style={{ color: "#000000" }}>
                01
              </h1>
            </div>
            <h5 className="text-white">Home Security</h5>
            <hr className="w-25" />
            <span>
              Vero elitr justo clita lorem ipsum dolor at sed stet sit diam
              rebum ipsum et diam justo clita et
            </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div className="h-100 bg-dark p-4 p-xl-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div
                className="btn-square rounded-circle"
                style={{ width: 64, height: 64, background: "#000000" }}
              >
                <img
                  className="img-fluid"
                  src="img/icon/icon-4.png"
                  alt="Icon"
                />
              </div>
              <h1 className="display-1 mb-0" style={{ color: "#000000" }}>
                02
              </h1>
            </div>
            <h5 className="text-white">Access Control</h5>
            <hr className="w-25" />
            <span>
              Vero elitr justo clita lorem ipsum dolor at sed stet sit diam
              rebum ipsum et diam justo clita et
            </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100 bg-dark p-4 p-xl-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div
                className="btn-square rounded-circle"
                style={{ width: 64, height: 64, background: "#000000" }}
              >
                <img
                  className="img-fluid"
                  src="img/icon/icon-2.png"
                  alt="Icon"
                />
              </div>
              <h1 className="display-1 mb-0" style={{ color: "#000000" }}>
                03
              </h1>
            </div>
            <h5 className="text-white">24/7 Support</h5>
            <hr className="w-25" />
            <span>
              Vero elitr justo clita lorem ipsum dolor at sed stet sit diam
              rebum ipsum et diam justo clita et
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}
  {/* About Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container about px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="img/about.jpg"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
        <div
          className="col-lg-6 about-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 pe-lg-0">
            <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
            <h1 className="display-5 mb-4">About Us</h1>
            <p className="mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="row g-4 mb-4 pb-3">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-1.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <h2 className="mb-1" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="fw-medium text-primary mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-5.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <h2 className="mb-1" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="fw-medium text-primary mb-0">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary rounded-pill py-3 px-5">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5 mb-5">Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt="" />
              <div className="team-social">
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt="" />
              <div className="team-social">
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt="" />
              <div className="team-social">
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt="" />
              <div className="team-social">
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-dark rounded-circle m-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

    )
}