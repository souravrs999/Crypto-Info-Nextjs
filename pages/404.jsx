import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Home, ArrowLeft } from "react-feather";

const Error = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Link href="/">
        <a
          className="btn btn-neutral btn-icon-only rounded-circle position-absolute left-7 top-7 d-none d-lg-inline-flex"
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          <span className="btn-inner--icon">
            <ArrowLeft className={hover ? "text-primary" : "text-secondary"} />
          </span>
        </a>
      </Link>
      <section className="vh-100 d-flex align-items-center">
        <div
          className="position-absolute h-100 top-5 pt-1 right-0 zindex-110 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end rounded-bottom-left"
          data-bg-size="cover"
          data-bg-position="center"
        >
          <Image
            src="/img/error/404-cover.webp"
            alt="Image"
            className="img-as-bg rounded-bottom-left rounded-top"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-7 col-lg-6 col-xl-6 mx-auto ml-lg-0">
              <div className="row justify-content-center">
                <div className="col-11 col-lg-10 col-xl-6 py-5">
                  <h6 className="display-1 mb-3 font-weight-600 text-primary">
                    Ooops!
                  </h6>
                  <p className="lead text-lg mb-5">
                    Sorry, the page you are looking for could not be found.
                  </p>
                  <Link href="/">
                    <a className="btn btn-primary btn-icon hover-translate-y-n3">
                      <span className="btn-inner--icon">
                        <Home size={18} />
                      </span>
                      <span className="btn-inner--text">Return home</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
