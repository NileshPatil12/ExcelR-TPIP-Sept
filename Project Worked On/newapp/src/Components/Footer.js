
import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      {/* Top Section */}
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Stay updated with the latest news from around the world. Our platform brings you real-time updates across multiple categories like technology, entertainment, sports, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/Entertainment" className="text-dark">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="/Technology" className="text-dark">
                  Technology
                </a>
              </li>
              <li>
                <a href="/Sports" className="text-dark">
                  Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              Email: <a href="mailto:support@topnews.com" className="text-dark">support@topnews.com</a>
            </p>
            <p>Phone: +1 (234) 567-8901</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center p-3 bg-primary text-white">
        © {new Date().getFullYear()} TOP NEWS | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
