import React, { useEffect, useRef,useState } from "react";
import CarouselComponent from "./carsouel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Industries from "../components/services.js"
import ThirdImage from "../assets/img3_home.jpg";
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import Footer from "./footer.js";


const Home = () => {

  const [showAllServices, setShowAllServices] = useState(false);
  
    const toggleServices = () => {
      setShowAllServices((prev) => !prev); 
    };
  
    const images = [
      { src: "https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg", alt: "E-commerce Development", title: "E-commerce Development" },
      { src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Website Growth", title: "Website Growth" },
      { src: "https://abetterwebsite.com.au/wp-content/uploads/2018/06/website-maintenance-services.jpg", alt: "Website Maintenance and Support", title: "Website Maintenance and Support" },
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Website Design", title: "Website Design" },
      { src: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Cybersecurity", title: "Cybersecurity" },
      { src: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Cloud", title: "Cloud" },
      { src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Consulting", title: "Consulting" },
      { src: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Data & Analytics", title: "Data & Analytics" },
      { src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Artificial Intelligence", title: "Artificial Intelligence" },

    ];

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-out");
          } else {
            entry.target.classList.remove("fade-out");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <main style={{ padding: "20px",marginTop:"50px" }}>
      <div className="carsouelheight">
        <CarouselComponent />
      </div>
      <div className="section2">
        <h1>Trusted by our Customers & Partners</h1>
      </div>

      {/* Material Icons Section */}
      {/* <div className="logos-section">
      <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png" alt="Google Logo" className="company-logo" />
      <img src="https://static.vecteezy.com/system/resources/previews/021/514/726/non_2x/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="Microsoft Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="company-logo" />
    </div> */}
      <div className="row services-section-home">
      <div style={{backgroundColor:"white",}}className="container py-5">
        <h1  style={{color:"black",}}className="whatwe-do-herotitle">Services We Offer</h1>
        <div className="row">
          {/* Show first 6 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2>{img.title}</h2>
              </div>
            </div>
          ))}

          {/* Show additional images only if `showAllServices` is true */}
          {showAllServices &&
            images.slice(6).map((img, index) => (
              <div key={index} className="col-md-4 position-relative image-container">
                <img className="w-100 custom-image" src={img.src} alt={img.alt} />
                <div className="overlay-text">
                  <h2>{img.title}</h2>
                </div>
              </div>
            ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <button className="view-more-btn" onClick={toggleServices}>
            {showAllServices ? "Show Less" : "View More "}
          </button> 
        </div>
      </div>
      </div>
 
      
      <div className="container py-5 section-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-section" ref={textRef}>
            <h2 className="mb-4 section-4-heading">What We Offer</h2>
            <h3>Design Development</h3>
            <p>
              Whether you're a start-up aiming to establish your digital
              presence or a growing enterprise seeking to elevate your brand,
              we’re here to support your journey. You’ve found a partner
              dedicated to your success, with the expertise to deliver real
              results.
            </p>
            <p>
              Over the past 5 years, we’ve worked with countless clients,
              helping them achieve measurable growth and lasting impact.
            </p>
            <p>
              <strong>
                Results, innovation, and growth are what we strive to bring to
                every project.
              </strong>
            </p>
          </div>

          <div className="col-md-6 image-section" ref={imageRef}>
            <img
              className="d-block w-100 custom-carousel-image"
              src={ThirdImage}
              alt="What We Offer"
            />
          </div>
        </div>
      </div>
<div>
<Industries/>
</div>
<div className="section-5">
     <h1 style={{textAlign:"start",color:"white"}}>Transform your Goals in to reality </h1>
   </div>
<div className="container py-5">
  <div className="row">
    <div className="col-md-4 position-relative image-container">
      <img
        className="w-100 custom-image"
        src={Slide3}
        alt="Reveal Goals"
      />
      <div className="overlay-text">
        <h2>Identify goals</h2>
      </div>
    </div>
    <div className="col-md-4 position-relative image-container">
      <img
        className="w-100 custom-image"
        src={Slide2}
        alt="Reveal Goals"
      />
      <div className="overlay-text">
        <h2>Design & Planning</h2>
      </div>
    </div>
    <div className="col-md-4 position-relative image-container">
      <img
        className="w-100 custom-image"
        src={Slide1}
        alt="Reveal Goals"
      />
      <div className="overlay-text">
        <h2>Execution & Reveal</h2>
      </div>
    </div>
  </div>
</div>
<div className="footer-section">
        <div className="footer-section-flex">
          <div>
          <h2>Transformation starts here
         </h2><br></br>
          <p>Imagine your future</p>
          <button className="Connect-button">Connect With Us</button>
          </div>
          <div className="divider"></div>
          <div className="footer-section-flex-column">
          <p>FIND OUT MORE</p>
          <button className="Connect-button-service">Our Services</button>
          <button className="Connect-button-contact">Contact Us</button>
          </div>
      </div>   
      </div>
      <Footer/>
    </main>

  

    
  );
};

export default Home;
