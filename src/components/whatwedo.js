import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Industries from "../components/services.js";
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

  return (
    <main>
      <div className="whatwedo-section-herobanner">
        <div className="whatwedo-container">
          <div className="whatwedo-content">
            <p className="whatwedo-subtitle">What we do</p>
            <hr className="underline" />
            <h1 className="whatwedo-title">Driving Innovations Across Industries</h1>
            <button className="btn btn-primary-whatwedo">
              Let's talk
            </button>
          </div>
        </div>
      </div>
      <section className="grid-section-whatwedo">
      <div className="grid-container-whatwedo">
        <div className="grid-item-whatwedo ">
          <img src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sample" className="grid-image" />
        </div>
        <div className="grid-item-whatwedo text">
          <h2>Innovative Solutions</h2>
          <p>
            We deliver cutting-edge solutions that transform businesses and drive growth. 
            Discover how our expertise can empower your journey to success.
          </p>
        </div>
      </div>
    </section>
      <h1 className="whatwe-do-title">Industries we serve</h1>
      <Industries />
      <div className="container py-5">
        <h1 className="whatwe-do-herotitle">Services We Offer</h1>
        <div className="row ">
          {/* Show first 4 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container ">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2 className="whatwe-do-title-text">{img.title}</h2>
              </div>
              <div class="gradient-overlay"></div>
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
                <div class="gradient-overlay"></div>
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
