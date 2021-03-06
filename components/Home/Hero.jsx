import Image from "next/image";
import Link from "next/link";

import Credits from "./Credits";

const Hero = () => {
  return (
    <section className="slice pt-md-8 pb-5 bg-section-dark">
      <div data-offset-top="#navbar-main">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 pr-lg-5">
              <h6 className="text-white">- Learn like a Pro</h6>
              <h1 className="display-4 text-white font-weight-bolder mb-4">
                A better way
                <strong className="d-block text-primary font-weight-bold h1">
                  to learn about Cryptocurrencies.
                </strong>
              </h1>
              <p className="lead text-white opacity-8">
                Your one stop solution for all crypto related resources
                <br />
                like Price charts, Exchanges, Markets, Faucets etc...
              </p>
              <div className="mt-5">
                <a
                  href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/"
                  className="btn btn-primary btn-icon d-lg-inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Exchanges
                </a>
                <Link href={{ pathname: "/coins", query: { page: 1 } }}>
                  <a className="btn btn-white btn-icon">
                    <span className="btn-inner--text">Coins</span>
                    <span className="btn-inner--icon">
                      <i data-feather="arrow-right"></i>
                    </span>
                  </a>
                </Link>
              </div>
              <Credits />
            </div>
            <div className="col-12 col-lg-6 mt-7 mt-lg-0">
              <div className="position-relative left-8 left-lg-0">
                <figure>
                  <Image
                    alt="Crypto around the world"
                    width={1000}
                    height={1000}
                    layout="responsive"
                    src="/img/home/crypto-around-world-light.png"
                    className="img-fluid mw-lg-120 rounded-top zindex-100"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
