import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Main Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Main</h5>
            <ul className="list-unstyled" style={{ backgroundColor: 'transparent' }}>
              <li><a href="#" className="text-decoration-none text-light">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-light">FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-light">Support</a></li>
              <li><a href="#" className="text-decoration-none text-light">About Us</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Product</h5>
            <ul className="list-unstyled" style={{ backgroundColor: 'transparent' }}>
              <li><a href="#" className="text-decoration-none text-light">Log In</a></li>
              <li><a href="#" className="text-decoration-none text-light">Personal</a></li>
              <li><a href="#" className="text-decoration-none text-light">Business</a></li>
              <li><a href="#" className="text-decoration-none text-light">Team</a></li>
            </ul>
          </div>

          {/* Office Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Office</h5>
            <ul className="list-unstyled" style={{ backgroundColor: 'transparent' }}>
              <li><a href="#" className="text-decoration-none text-light">Press</a></li>
              <li><a href="#" className="text-decoration-none text-light">Logos</a></li>
              <li><a href="#" className="text-decoration-none text-light">Events</a></li>
              <li><a href="#" className="text-decoration-none text-light">Stories</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled" style={{ backgroundColor: 'transparent' }}>
              <li><a href="#" className="text-decoration-none text-light">GDPR</a></li>
              <li><a href="#" className="text-decoration-none text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-light">Terms of Service</a></li>
              <li><a href="#" className="text-decoration-none text-light">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-light" />

        {/* Newsletter Section */}
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="mb-3">Subscribe to our Newsletter</h5>
            <p>
              We deliver high-quality blog posts written by professionals weekly. 
              And we promise no spam.
            </p>
          </div>
          <div className="col-md-4">
            <form>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-label="Email" 
                  aria-describedby="button-subscribe" 
                />
                <button className="btn btn-primary" type="button" id="button-subscribe">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
