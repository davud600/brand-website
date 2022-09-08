import React from 'react'

export default function ServicesSection() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            We provide services such as tutoring for students who are learning
            programming in Java (Mainly college students but it can be anyone of
            any age). We provide web development lessons, from HTML and CSS all
            the way to web design, javascript and backend coding
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">Web Development Lessons</a>
              </h4>
              <p>
                Learn how to design and make a website from scratch, or just
                learn the essentials like HTML, CSS and Javascript
              </p>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <a href="">Java Lessons</a>
              </h4>
              <p>
                Get on a call and learn Java together with other people,
                learning will be professional but also fun
              </p>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-layer"></i>
              </div>
              <h4>
                <a href="">Website</a>
              </h4>
              <p>
                We will build a website for you. A professional good looking
                website with tons of features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
