import React from 'react'

export default function CtaSection() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p>
              {' '}
              So what are you waiting for? Join our discord or make an
              appointment for private lessons
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
