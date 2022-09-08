import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              We are college students who have been passionate about programming
              for a long time, our goal is to find more people like us and help
              each other learn and grow. We want to build a community with
              people like you
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Join a community of
                people like you and learn together while also growing your
                social network
              </li>
              <li>
                <i className="ri-check-double-line"></i> Individually ask our
                team members for help with programming problems or homework
              </li>
              <li>
                <i className="ri-check-double-line"></i> Grow
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Our team is made up of students who enjoy the process of learning,
              thats also the kind of people we want to teach. Join out discord
              or send us an email for futher details
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
