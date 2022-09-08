/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer id="footer">
        {/* <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>RLD</h3>
                <p>
                  Pristine, <br />
                  Kosovo
                  <br />
                  <br />
                  <strong>Phone:</strong> +383 49 619 934
                  <br />
                  <strong>Email:</strong> rld@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="/tos">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="/policy">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Tutoring</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Web Development</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Follow us on social media</p>
                <div className="social-links mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com"
                    className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://facebook.com"
                    className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://instagram.com"
                    className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://linkedin.com"
                    className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>RLD</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </>
  )
}
