export default function Home(){
    return(
        <>
  {/* Carousel Start */}
  <div className="container-fluid p-0 pb-5">
    <div
      id="headerCarousel"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* Cook Service */}
        <div className="carousel-item active" style={{ height: "70vh" }}>
          <img
            className="w-100 h-100"
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80"
            alt="Cook Service"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center h-100">
            <div className="text-center">
              <h1 className="display-5 text-white mb-3">
                Professional Cook Services At Home
              </h1>
              <p className="fs-5 text-white mb-4">
                Hire experienced cooks for daily meals, parties, and special
                occasions with trusted service providers.
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill px-4 py-2 me-3"
              >
                Book Now
              </a>
              <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                View Cooks
              </a>
            </div>
          </div>
        </div>
        {/* Plumber Service */}
        <div className="carousel-item" style={{ height: "70vh" }}>
          <img
            className="w-100 h-100"
            src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=1600&q=80"
            alt="Plumber Service"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center h-100">
            <div className="text-center">
              <h1 className="display-5 text-white mb-3">
                Reliable Plumbing Services
              </h1>
              <p className="fs-5 text-white mb-4">
                Book skilled plumbers for repairs, installations, and emergency
                services at affordable rates.
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill px-4 py-2 me-3"
              >
                Book Plumber
              </a>
              <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                Get Quote
              </a>
            </div>
          </div>
        </div>
        {/* Tuition Teacher Service */}
        <div className="carousel-item" style={{ height: "70vh" }}>
          <img
            className="w-100 h-100"
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
            alt="Tuition Teacher"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center h-100">
            <div className="text-center">
              <h1 className="display-5 text-white mb-3">
                Expert Home Tuition Teachers
              </h1>
              <p className="fs-5 fw-medium text-white mb-4">
                Find qualified tutors for school subjects, competitive exams,
                and personalized learning.
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill px-4 py-2 me-3"
              >
                Find Tutor
              </a>
              <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#headerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#headerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  </div>
  {/* Carousel End */}
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
        {/* Image */}
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              style={{ objectFit: "cover" }}
              alt="Vendor Services"
            />
          </div>
        </div>
        {/* Content */}
        <div
          className="col-lg-6 about-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 pe-lg-0">
            <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
            <h1 className="display-5 mb-4">About Our Services</h1>
            <p className="mb-4 pb-2">
              We connect you with trusted and verified service professionals
              such as cooks, plumbers, home tutors, electricians, cleaners, and
              more. Our platform makes booking skilled vendors quick, reliable,
              and hassle-free.
            </p>
            <div className="row g-4 mb-4 pb-3">
              {/* Happy Customers */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                      alt="Happy Customers"
                    />
                  </div>
                  <div className="ms-4">
                    <h2 className="mb-1" data-toggle="counter-up">
                      2500
                    </h2>
                    <p className="fw-medium text-primary mb-0">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
              {/* Services Completed */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                      alt="Services Completed"
                    />
                  </div>
                  <div className="ms-4">
                    <h2 className="mb-1" data-toggle="counter-up">
                      1800
                    </h2>
                    <p className="fw-medium text-primary mb-0">
                      Services Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary rounded-pill py-3 px-5">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5 mb-5">Our Services</h1>
      </div>
      <div className="row g-0 service-row">
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className="service-item border h-100 p-5">
            <div
              className="btn-square bg-light rounded-circle mb-4"
              style={{ width: 64, height: 64 }}
            >
              <img className="img-fluid" src="img/icon/icon-6.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Commercial CCTV System</h4>
            <p className="mb-4">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
            </p>
            <a className="btn" href="">
              <i className="fa fa-arrow-right text-white me-3" />
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
          <div className="service-item border h-100 p-5">
            <div
              className="btn-square bg-light rounded-circle mb-4"
              style={{ width: 64, height: 64 }}
            >
              <img className="img-fluid" src="img/icon/icon-8.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Finger Print Access</h4>
            <p className="mb-4">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
            </p>
            <a className="btn" href="">
              <i className="fa fa-arrow-right text-white me-3" />
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
          <div className="service-item border h-100 p-5">
            <div
              className="btn-square bg-light rounded-circle mb-4"
              style={{ width: 64, height: 64 }}
            >
              <img className="img-fluid" src="img/icon/icon-9.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Fire Detection And Safety</h4>
            <p className="mb-4">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
            </p>
            <a className="btn" href="">
              <i className="fa fa-arrow-right text-white me-3" />
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
          <div className="service-item border h-100 p-5">
            <div
              className="btn-square bg-light rounded-circle mb-4"
              style={{ width: 64, height: 64 }}
            >
              <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Smart Home Security</h4>
            <p className="mb-4">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
            </p>
            <a className="btn" href="">
              <i className="fa fa-arrow-right text-white me-3" />
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Feature Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div
          className="col-lg-6 feature-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 ps-lg-0">
            <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
            <h1 className="display-5 mb-5">Why Choose Us</h1>
            <p className="mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-7.png"
                      alt="Icon"
                    />{" "}
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Trusted</p>
                    <h5 className="mb-0">Security</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-10.png"
                      alt="Icon"
                    />{" "}
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Quality</p>
                    <h5 className="mb-0">Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-3.png"
                      alt="Icon"
                    />{" "}
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Smart</p>
                    <h5 className="mb-0">Systems</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-2.png"
                      alt="Icon"
                    />{" "}
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">24/7 Hours</p>
                    <h5 className="mb-0">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            {" "}
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="img/feature.jpg"
              style={{ objectFit: "cover" }}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* Feature End */}
  {/* Projects Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5 mb-5">Our Services</h1>
      </div>
      <div className="row g-4 portfolio-container">
        {/* Cook */}
        <div className="col-lg-4 col-md-6 portfolio-item wow fadeInUp">
          <div className="portfolio-inner">
            <img
              className="img-fluid w-100"
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Home Service</p>
              <h5 className="lh-base mb-0">Professional Cook</h5>
            </div>
          </div>
        </div>
        {/* Plumber */}
        <div className="col-lg-4 col-md-6 portfolio-item wow fadeInUp">
          <div className="portfolio-inner">
            <img
              className="img-fluid w-100"
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Repair Service</p>
              <h5 className="lh-base mb-0">Expert Plumber</h5>
            </div>
          </div>
        </div>
        {/* Tutor */}
        <div className="col-lg-4 col-md-6 portfolio-item wow fadeInUp">
          <div className="portfolio-inner">
            <img
              className="img-fluid w-100"
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Education</p>
              <h5 className="lh-base mb-0">Home Tuition Teacher</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Quote Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container quote px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              style={{ objectFit: "cover" }}
              alt="Service Booking"
            />
          </div>
        </div>
        <div
          className="col-lg-6 quote-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 pe-lg-0">
            <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
            <h1 className="display-5 mb-5">Book a Service</h1>
            <p className="mb-4 pb-2">
              Need a service urgently? Fill in your details and get connected
              with the best available service professional near you.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Mobile"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: 55 }}
                  >
                    <option selected="">Select A Service</option>
                    <option>Cook</option>
                    <option>Plumber</option>
                    <option>Home Tutor</option>
                    <option>Electrician</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0"
                    placeholder="Service Details"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Book Service Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
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
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5 mb-5">Testimonial</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

    )
}