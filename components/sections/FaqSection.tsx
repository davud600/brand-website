import React from 'react'

export default function FaqSection() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Some frequently asked questions about our services and brand. More
            information about us can be found below, if there are any more
            questions you might have please do not hesitate to send us an email
          </p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1">
                Non consectetur a erat nam at lectus urna duis?{' '}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed">
                Who are we? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list">
                <p>We are the ones fucking your mom</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed">
                How qualified is your team to give programming lessons?{' '}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list">
                <p>
                  Our team consists of talented college students who have had a
                  big passion about programming for a long time. Not only that
                  but our community is growing and helping each other together
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
