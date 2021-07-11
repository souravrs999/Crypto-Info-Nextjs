export default function Credits() {
  return (
    <>
      <div className="mt-5 mt-lg-5 mt-xl-7">
        <h6 className="text-sm text-white opacity-7 mb-3">Powered by:</h6>
        <div className="d-flex">
          <div className="mr-3">
            <a
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="Bootstrap 4.5.3"
              >
                <img
                  alt="coingecko logo"
                  src="/img/partners/icons/coingecko-logo.svg"
                  style={{ width: "30px" }}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="HTML5"
              >
                <img
                  alt="nextjs logo"
                  src="/img/partners/icons/nextjs-icon-dark.svg"
                  style={{ width: "30px" }}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <div
              className="icon icon-shape icon-white rounded-circle"
              data-toggle="tooltip"
              title=""
              data-original-title="CSS3"
            >
              <img
                alt="react logo"
                src="/img/partners/icons/reactjs-icon.svg"
                style={{ width: "30px" }}
              />
            </div>
          </div>
          <div className="mr-3">
            <div
              className="icon icon-shape icon-white rounded-circle"
              data-toggle="tooltip"
              title=""
              data-original-title="Sass"
            >
              <img
                alt="Image placeholder"
                src="https://webpixels.s3.eu-central-1.amazonaws.com/public/icons/sass.svg"
                style={{ width: "30px" }}
              />
            </div>
          </div>
          <div className="mr-3">
            <div
              className="icon icon-shape icon-white rounded-circle"
              data-toggle="tooltip"
              title=""
              data-original-title="jQuery"
            >
              <img
                alt="Image placeholder"
                src="https://webpixels.s3.eu-central-1.amazonaws.com/public/icons/jquery.svg"
                style={{ width: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
