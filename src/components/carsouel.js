import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style.css";


function UncontrolledExample() {
  return (
    <div className="carousel-container">
      <Carousel interval={2000} controls={true} indicators={false} slide>
        {/* First Slide with Video */}
        <Carousel.Item>
          <video
            className="d-block w-100 custom-carousel-video"
            src="https://videos.pexels.com/video-files/7308103/7308103-hd_1920_1080_24fps.mp4"
            autoPlay
            loop
            muted
          />
          <Carousel.Caption className="carousel-caption-style">
            <h1>Expertly built websites, every time.</h1>
            <hr></hr>
            <p className="carousel-description">
              Whether you're looking to grow your e-commerce site or refine
              your marketing site, we can help.
            </p>
            <button className="read-more-btn">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
        <video
            className="d-block w-100 custom-carousel-video"
            src="https://videos.pexels.com/video-files/4017225/4017225-uhd_2560_1440_30fps.mp4"
            autoPlay
            loop
            muted
          />
          <Carousel.Caption className="carousel-caption-style">
            <h1>Software Solutions.</h1>
            <hr></hr>
            <p className="carousel-description">
              We help teams and businesses thrive through technology.
            </p>
            <button className="read-more-btn">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
        <video
            className="d-block w-100 custom-carousel-video"
            src="https://videos.pexels.com/video-files/852423/852423-hd_1920_1080_24fps.mp4"
            autoPlay
            loop
            muted
          />
          <Carousel.Caption className="carousel-caption-style">
            <h1>Future-Ready Solutions</h1>
            <hr></hr>
            <p className="carousel-description">
            Leverage our expertise in cloud transformation and engineering excellence
            </p>
            <button className="read-more-btn">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
