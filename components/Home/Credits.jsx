import Image from "next/image";

const Credits = () => {
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
                <Image
                  alt="coingecko logo"
                  src="/img/partners/icons/coingecko-logo.svg"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="HTML5"
              >
                <Image
                  alt="nextjs logo"
                  src="/img/partners/icons/nextjs-icon-dark.svg"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="CSS3"
              >
                <Image
                  alt="react logo"
                  src="/img/partners/icons/reactjs-icon.svg"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="Sass"
              >
                <Image
                  alt="Image placeholder"
                  src="/img/partners/icons/bootstrap-icon.svg"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="mr-3">
            <a href="https://html.com/" target="_blank" rel="noreferrer">
              <div
                className="icon icon-shape icon-white rounded-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="jQuery"
              >
                <Image
                  alt="Image placeholder"
                  src="/img/partners/icons/html-icon.svg"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
