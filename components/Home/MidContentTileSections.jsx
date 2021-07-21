import Image from "next/image";
import {
  Check,
  Coffee,
  DollarSign,
  Eye,
  Heart,
  Paperclip,
  ShoppingCart,
  Star,
  ThumbsUp,
} from "react-feather";

const MidContentTileSection = ({ noCoins }) => {
  return (
    <section className="slice">
      <div className="container position-relative zindex-100">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-6">
            <h2 className="mt-4">Coins, Exchanges and Market overview</h2>
            <div className="mt-2">
              <p className="lead lh-180">
                All information that you may need for your anlaysis.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row mx-n2">
              <div className="col-md-4 px-sm-2">
                <div className="card mb-3">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-success text-white mr-4">
                        <DollarSign />
                      </div>
                    </div>
                    <div>
                      <span className="h6">{noCoins}</span>
                      <p className="text-sm text-muted mb-0">
                        Cryptocurrency Coins.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-0 mb-3">
                  <div className="h-100">
                    <Image
                      className="card-img-top"
                      src="/img/home/sven-eberwein.webp"
                      alt="Card image cap"
                      width={400}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="avatar avatar-sm rounded-circle bg-light-dark text-white">
                          NFT
                        </span>
                      </div>
                      <div className="pl-3">
                        <span className="h6 text-sm mb-0">Marketplace</span>
                      </div>
                      <div className="ml-auto">
                        <div className="actions">
                          <a href="index.html#!" className="action-item">
                            <i data-feather="heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-n1 mb-3">
                  <div className="col-auto text-center my-1 px-1">
                    <span className="avatar bg-white text-primary rounded-circle shadow-sm">
                      <ShoppingCart />
                    </span>
                  </div>
                  <div className="col-auto text-center my-1 px-1">
                    <span className="avatar bg-white text-success rounded-circle shadow-sm">
                      <Check />
                    </span>
                  </div>
                  <div className="col-auto text-center my-1 px-1">
                    <span className="avatar bg-white text-warning rounded-circle shadow-sm">
                      <Coffee />
                    </span>
                  </div>
                  <div className="col-auto text-center my-1 px-1">
                    <span className="avatar bg-white text-danger rounded-circle shadow-sm">
                      <Heart />
                    </span>
                  </div>
                  <div className="col-auto text-center my-1 px-1">
                    <span className="avatar bg-white text-info rounded-circle shadow-sm">
                      <ThumbsUp />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-sm-2">
                <div className="card mb-3">
                  <div className="card-body py-5 text-center h-100">
                    <div className="img-fluid mb-4 w-50 mx-auto">
                      <Image
                        src="/img/clients/svg/airbnb.svg"
                        alt="Image placeholder"
                        height={100}
                        width={200}
                      />
                    </div>
                    <span className="static-rating d-block">
                      <Star className="star voted" />
                      <Star className="star voted" />
                      <Star className="star voted" />
                      <Star className="star voted" />
                      <Star className="star voted" />
                    </span>
                    <h5 className="h6 mt-4 mb-1">4.95 out of 5 stars</h5>
                    <p className="text-muted text-sm mb-0">from 23 reviews</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <a
                      href="index.html#"
                      className="avatar rounded-circle avatar-lg hover-translate-y-n3"
                    >
                      <Image
                        alt="Image placeholder"
                        src="/img/theme/light/company-1.png"
                        width={200}
                        height={200}
                      />
                    </a>
                    <a href="index.html#" className="d-block h6 mt-3 mb-4">
                      Website UI Kit
                    </a>
                    <div className="avatar-group hover-avatar-ungroup mb-2">
                      <a
                        href="index.html#"
                        className="avatar rounded-circle avatar-sm"
                      >
                        <Image
                          alt="Image placeholder"
                          src="/img/theme/light/person-1.jpg"
                          className=""
                          height={100}
                          width={100}
                        />
                      </a>
                      <a
                        href="index.html#"
                        className="avatar rounded-circle avatar-sm"
                      >
                        <Image
                          alt="Image placeholder"
                          src="/img/theme/light/person-1.jpg"
                          className=""
                          height={100}
                          width={100}
                        />
                      </a>
                      <a
                        href="index.html#"
                        className="avatar rounded-circle avatar-sm"
                      >
                        <Image
                          alt="Image placeholder"
                          src="/img/theme/light/person-1.jpg"
                          className=""
                          height={100}
                          width={100}
                        />
                      </a>
                    </div>
                    <span className="clearfix"></span>
                    <div className="mt-3 pt-3 delimiter-top">
                      <div className="actions">
                        <a href="index.html#!" className="action-item mr-3">
                          <Paperclip />
                        </a>
                        <a href="index.html#!" className="action-item mr-3">
                          <Eye />
                        </a>
                        <a href="index.html#!" className="action-item">
                          <Heart />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-sm-2">
                <div className="card mb-3">
                  <div className="card-body pt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="icon icon-sm">
                          <Image
                            alt="Image placeholder"
                            src="/img/svg/social/github.svg"
                            className="svg-inject"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="d-flex align-items-center">
                          <div>
                            <span className="badge badge-xs badge-circle rounded-circle badge-success">
                              <Check size={15} />
                            </span>
                          </div>
                          <div className="pl-2">
                            <small className="h6 text-xs text-success">
                              Live
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="mb-0">Github</h6>
                      <p className="mb-0 text-sm text-muted">
                        Checkout the source code for this
                        <br />
                        website
                        <a href="#" className="text-info">
                          {" "}
                          @github
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="icon">
                      <Image
                        alt="Image placeholder"
                        src="/img/svg/icons/Checkout.svg"
                        className="svg-inject"
                        height={50}
                        width={50}
                      />
                    </div>
                    <a href="index.html#" className="d-block h5 mt-3">
                      Checkout
                    </a>
                    <p className="text-sm text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the card{"\u0027"}s content.
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="w-80">
                        <div className="progress progress-sm shadow-none">
                          <div
                            className="progress-bar bg-"
                            role="progressbar"
                            style={{ width: "%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="col px-0 text-right">
                        <a href="index.html#" className="h6 text-sm text-">
                          %
                        </a>
                      </div>
                    </div>
                    <div className="row align-items-center mt-4">
                      <div className="col-6">
                        <a
                          href="index.html#"
                          className="btn btn-sm btn-primary"
                        >
                          Tasks
                        </a>
                      </div>
                      <div className="col-6 text-right">
                        <span className="h6 font-weight-bolder text-warning">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidContentTileSection;
