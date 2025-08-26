import React, { useState, useRef, useEffect } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Footer from "./footer.js";
const AboutUs = () => {
  
  const [inView, setInView] = useState(false);



  const myRef = useRef();
  const chipsRef = useRef([]);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Intersection Observer to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Set the state to true when the element is in view
        }
      },
      { threshold: 0.5 }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, []);

  // Chips for animation
  const chips = [
    "Good",
    "Awesome",
    "Nice",
    "Creative",
    "Efficient",
    "Innovative",
  ];

  return (
    <div className="section-aboutus">
      <div className="About-section-herobanner">
        <div className="whatwedo-container">
          <div className="whatwedo-content">
            <p className="whatwedo-subtitle">About Us</p>
            <hr className="underline" />
            <h1 className="whatwedo-title">
              {" "}
              Driving Success Through Data, Technology, and Tailored Enterprise
              Solutions
            </h1>
            <button className="btn btn-primary-whatwedo">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="section2aboutus">
        <p className="section2-aboutus">
          Welcome to LVC Solutions, a dynamic and innovative software solutions
          company proudly based in the USA. As a startup with a vision to
          transform the digital landscape, we specialize in combining the power
          of data and cutting-edge technology to deliver world-class enterprise
          solutions. Our mission is to empower businesses by streamlining
          processes, enhancing efficiency, and driving growth through tailored
          software solutions that cater to unique challenges and aspirations.
          From robust data analytics platforms to scalable enterprise systems,
          we design and develop solutions that not only meet current needs but
          also anticipate future demands.
        </p>
      </div>
      <div className="containersection">
        <div className="text-content position-relative z-index-2">
          <h2 className="image-banner-heading text-uppercase">A Message From  Our Founder</h2>
          <div className="image-banner-text position-relative">
"We're here to do more than build a company—we're building a community. Innovation drives us, but our purpose is deeper. Creating designs that matter, paths that inspire, and connections that grow into something bigger than all of us.",
<br></br> <span style={{fontSize:"14px",fontWeight:"lighter"}}>Founder & CEO  Venkat Gunji",</span>
          </div>
          <a
            href="../"
            target="_blank"
            rel="noopener noreferrer"
            className="image-banner-link text-decoration-none position-relative tcs-section-click cta-arrow-animation"
          >
            Join us
            <span className="visually-hidden">&nbsp; of &nbsp; OUR PEOPLE</span>
          </a>
        </div>
      </div>


      <div className="tabsecction">
        <h1>Why Us</h1>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active  nav-btn-tab"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Our Mission
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link nav-btn-tab"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Our Vision
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link nav-btn-tab"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              We are
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Our Mission</h1>
                <p className="tab-paragraph">
                At LVC Solutions, our mission is to empower businesses by delivering innovative solutions that drive growth, streamline operations, and inspire transformation. We are dedicated to providing exceptional services that address complex challenges while fostering lasting partnerships built on trust, integrity, and excellence.

We strive to enable organizations to achieve their full potential by offering tailored solutions that adapt to ever-changing business landscapes. At LVC Solutions, our goal is to go beyond expectations, creating impactful outcomes that lead to long-term success.
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Our Vision</h1>
                <p className="tab-paragraph">
                At LVC Solutions, our vision is to be a trusted partner for businesses, delivering transformative solutions that empower them to innovate, grow, and thrive in a rapidly evolving world. We strive to help organizations across industries unlock their full potential through tailored strategies, exceptional service, and a commitment to excellence.
             By fostering innovation, embracing change, and focusing on creating meaningful value, we aim to shape a future where businesses achieve sustainable growth and success. At LVC Solutions, we envision a world where technology and creativity converge to redefine possibilities
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1565665681743-6ff01c5181e3?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Innovators at Heart</h1>
                <p className="tab-paragraph">
                  We are a dynamic team of tech enthusiasts and innovators who
                  thrive on challenges. Our diverse expertise spans across
                  modern technologies like AI, cloud computing, and digital
                  engineering. We believe in fostering a culture of continuous
                  learning and collaboration, ensuring we remain at the
                  forefront of technological advancement while delivering
                  exceptional value to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="about-cta"
        ref={myRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundColor: "#black",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1
            className="insight-motion-profile"
          >
            Trusted by 100+ companies
          </h1>
        </motion.div>

        {/*  Chips with Random Colors */}
        <div
          ref={chipsRef}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            opacity: inView ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {chips.map((chip, index) => (
            <motion.div
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 550, // Change the final Y value to determine where chips fall to
                opacity: 1,
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.1, // Stagger delay for a rain effect
                },
              }}
              style={{
                padding: "8px 15px",
                backgroundColor: getRandomColor(), // Random color for each chip
                color: "#fff",
                borderRadius: "25px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "16px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {chip}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-section-flex">
          <div>
            <h2>Transformation starts here</h2>
            <br></br>
            <p>At LVC Solutions, transformation starts where vision meets action. We are not just a software company—we are your dedicated partner in reimagining what's possible. <br /> 
              Rooted in innovation and driven by real-world results, we empower businesses to cross the digital frontier with confidence and agility.<br />
               Let's build tomorrow—starting today.</p>
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
    </div>
    
  );
};

export default AboutUs;
