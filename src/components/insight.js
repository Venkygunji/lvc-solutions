import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "../style.css";
import { Pagination ,Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer.js";

const Insight = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [inView, setInView] = useState(false);
  const toggleServices = () => {
    setShowAllServices((prev) => !prev);
  };

  const images = [
    {
      src: "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "E-commerce Development",
      title: "E-commerce Development",
    },
    {
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Growth",
      title: "Website Growth",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Maintenance and Support",
      title: "Website Maintenance and Support",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Design",
      title: "Website Design",
    },
    {
      src: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      title: "Cybersecurity",
    },
    {
      src: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cloud",
      title: "Cloud",
    },
    {
      src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Consulting",
      title: "Consulting",
    },
    {
      src: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      title: "Data & Analytics",
    },
    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      title: "Digital Transformation",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Innovation",
      title: "Innovation",
    },
    {
      src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Artificial Intelligence",
      title: "Artificial Intelligence",
    },
  ];
  const img = [
    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      number: "1",
      title: "Is DeepSeek China's Sputnik Moment?",
      description: "IS DEEPSEEK",
    },

    {
      src: "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      number: "2",
      title: "Iot is transforming hospitals into smart environments",
      description: "IOT FOR HEALTH CARE ",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      number: "3",
      title: "Six Takeaways From a Monumental Week for AI",
      description: "TAKEAWAYS FROM A DIRECTORY",
    },
  ];
 
  

  return (
    <main>
      {/* Hero Section */}
      <div className="insight-section-herobanner">
        <div className="insight-container">
          <div className="insight-content">
            <p className="insight-subtitle">Insight</p>
            <hr className="underline" />
            <h1 className="insight-title">Where Ideas Meet Action</h1>
            <h5>Insights that shape the future.</h5>
            <button className="btn btn-primary-insight">Let's talk</button>
          </div>
        </div>
      </div>

      {/* Insight by Interest Section */}
      <div style={{ backgroundColor: "black" }} className="container py-5">
        <h1
          style={{ color: "white", textAlign: "start" }}
          className="whatwe-do-herotitle"
        >
          Insight by Interest
        </h1>

        <div className="row">
          {images.slice(0, 6).map((img, index) => (
            <div
              key={index}
              className="col-md-4 position-relative image-container"
            >
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2>{img.title}</h2>
              </div>
            </div>
          ))}

          {showAllServices &&
            images.slice(6).map((img, index) => (
              <div
                key={index + 4}
                className="col-md-4 position-relative image-container"
              >
                <img
                  className="w-100 custom-image"
                  src={img.src}
                  alt={img.alt}
                />
                <div className="overlay-text">
                  <h2>{img.title}</h2>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-4">
          <button className="view-more-btn" onClick={toggleServices}>
            {showAllServices ? "Show Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="isight-wrapper">
        <h1>Updated with Latest news</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {img.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-image-container position-relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-100 swiper-image"
                />
                <div className="overlay-text overlay-text-insight">
                  <h1 className="getupdate-number">{img.number}</h1>
                  <h2>{img.description}</h2>
                  <h3>{img.title}</h3>
                  <h2
                    className="insight-readmore-cta"
                    style={{
                      color: "white",
                      paddingTop: "15px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      flexWrap:"wrap",
                      gap: "8px",
                    }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trusted by Companies Section */}

<div>

<Swiper
        slidesPerView={2}
        spaceBetween={50}
        navigation={{ clickable: true,}}
        modules={[Pagination, Navigation]}
        
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              LVC Solutions LLC completely transformed our operations. Their
              team delivered a seamless solution tailored to our needs, ensuring
              efficiency and scalability. From planning to execution, every step
              was handled with professionalism and care. Their commitment to
              excellence is unmatched. Thanks to them, we’ve gained a
              competitive edge in the market. Highly recommend their services!
            </p>
            <p className="pt-customer-review-caption">
             <strong style={{color:"black"}}>John S.,</strong>  CEO, E-commerce Business
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              Partnering with LVC Solutions was the best decision we made for
              our company. Their team not only understood our requirements but
              also delivered innovative solutions to optimize our processes.
              Their responsiveness and expertise set them apart from others.
              We’ve seen remarkable improvements in productivity and customer
              satisfaction. Truly a game-changer for us!
            </p>
            <p className="pt-customer-review-caption">
                <strong style={{color:"black"}}> Emily K., </strong> CTO, Healthcare Firm
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              We trusted LVC Solutions to revamp our IT infrastructure, and
              they exceeded all expectations. Their approach was thorough,
              strategic, and tailored to our unique needs. They ensured smooth
              communication throughout the project and delivered on time. The
              improvements in our operations have been phenomenal. We look
              forward to future collaborations!
            </p>
            <p className="pt-customer-review-caption">
                <strong style={{color:"black"}}> Rajesh K., </strong> IT Manager, Financial Institution
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              The team at LVC Solutions went above and beyond to provide us
              with cutting-edge solutions. Their dedication to understanding our
              goals and customizing strategies was impressive. From start to
              finish, they showcased exceptional professionalism and technical
              expertise. We are now better equipped to serve our clients and
              expand our reach. Thank you, LVC Solutions!
            </p>
            <p className="pt-customer-review-caption">
               <strong style={{color:"black"}}> Sarah M.,  </strong> COO, Education Sector
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              LVC Solutions brought unparalleled expertise and innovation to
              our project. Their tailored approach addressed our specific
              challenges, and the results exceeded expectations. They don’t just
              provide services – they deliver value. Their team’s attention to
              detail and dedication to quality truly stood out. We’re excited to
              continue working with them!
            </p>
            <p className="pt-customer-review-caption">
               <strong style={{color:"black"}}>  Michael T., </strong> VP of Operations, Retail Company
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              I cannot speak highly enough of LVC Solutions LLC. They brought
              clarity, structure, and efficiency to our complex IT needs. Their
              team’s expertise in delivering tailored solutions was evident from
              day one. We’ve experienced significant improvements in system
              performance and security. It’s been a pleasure working with such a
              professional and innovative team!
            </p>
            <p className="pt-customer-review-caption">
                <strong style={{color:"black"}}>Lisa P., </strong> Director of Technology, Logistics Company
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-customer-review">
            <p className="pt-customer-review-description">
              “LVC Solutions LLC completely transformed our operations. Their
              team delivered a seamless solution tailored to our needs, ensuring
              efficiency and scalability. From planning to execution, every step
              was handled with professionalism and care. Their commitment to
              excellence is unmatched. Thanks to them, we’ve gained a
              competitive edge in the market. Highly recommend their services!”
            </p>
            <p className="pt-customer-review-caption">
            <strong style={{color:"black"}}> Emily K., </strong> CEO, E-commerce Business
            </p>
          </div>
        </SwiperSlide>
  
      </Swiper>
</div>
<div className="footer-section">
        <div className="footer-section-flex">
          <div>
            <h2>Transformation starts here</h2>
            <br></br>
            <p>Imagine your future</p>
            <button className="Connect-button">Connect With Us</button>
          </div>
          <div className="divider"></div>
          <div className="footer-section-flex-column">
            <p>FIND OUT MORE</p>
            <button className="Connect-button-service">Our Services</button>
            <button className="Connect-button-contact ">Contact Us</button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Insight;
