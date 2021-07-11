export default function FooterModule() {
  return (
    <>
      <footer className="position-relative" id="footer-main">
        <div className="footer pt-lg-7">
          <div className="container pt-4">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <h3 className="text-secondary mb-2">
                      Brilliant solutions for your ideas
                    </h3>
                    <p className="lead mb-0 text-white opacity-8">
                      Build modern looking websites fast and easy using Quick.
                    </p>
                  </div>
                  <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
                    <a
                      href="docs/index.html"
                      className="btn btn-white btn-icon my-2"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i data-feather="book" className="text-primary" />
                      </span>
                      <span className="btn-inner--text">Documentation</span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary my-2 ml-0 ml-sm-3"
                      target="_blank"
                    >
                      Purchase now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider divider-fade divider-dark my-5" />
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <a href="index.html">
                  <img
                    alt="Image placeholder"
                    src="img/brand/light.svg"
                    id="footer-logo"
                  />
                </a>
                <p className="mt-4 text-sm opacity-8 pr-lg-4">
                  Crypto Info attempts to bring all crypto related resources
                  under one umbrella so that our users can benefit like Market
                  Data, Exchanges, Information, Faucets etc..
                </p>
                <ul className="nav mt-4">
                  <li className="nav-item">
                    <a className="nav-link pl-0" href="#" target="_blank">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                <h6 className="heading mb-3">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html#">Profile</a>
                  </li>
                  <li>
                    <a href="index.html#">Settings</a>
                  </li>
                  <li>
                    <a href="index.html#">Billing</a>
                  </li>
                  <li>
                    <a href="index.html#">Notifications</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                <h6 className="heading mb-3">About</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html#">Services</a>
                  </li>
                  <li>
                    <a href="index.html#">Pricing</a>
                  </li>
                  <li>
                    <a href="index.html#">Contact</a>
                  </li>
                  <li>
                    <a href="index.html#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                <h6 className="heading mb-3">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html#">Community</a>
                  </li>
                  <li>
                    <a href="index.html#">Help center</a>
                  </li>
                  <li>
                    <a href="index.html#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider divider-fade divider-dark my-4" />
            <div className="row align-items-center justify-content-md-between pb-4">
              <div className="col-md-6">
                <div className="copyright text-sm font-weight-bold text-center text-md-left">
                  &copy; 2020
                  <a href="#" className="font-weight-bold" target="_blank">
                    Crypto Info
                  </a>
                  . All rights reserved
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html#">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index.html#">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index.html#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
