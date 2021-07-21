import Image from "next/image";

import coinGecko from "../api/coinGecko";
import CoinChartBlock from "../../components/Coins/CoinDetails/CoinChartBlock";
import CoinFirstDataBlock from "../../components/Coins/CoinDetails/CoinFirstDataBlock";
import CoinSecondDataBlock from "../../components/Coins/CoinDetails/CoinSecondDataBlock";

const CoinDetails = (props) => {
  return (
    <>
      <section className="slice slice-sm">
        {console.log(props)}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div>
                <div className="row align-items-center mb-3">
                  <div className="col">
                    <h6 className="mb-0">Coin Stats</h6>
                  </div>
                </div>
                <div className="row">
                  {/* first block */}
                  <CoinFirstDataBlock
                    coinName={props._cD.name}
                    coinImage={props._cD.image}
                    currentPrice={props._cD.market_data.current_price.usd}
                    marketCR={props._cD.market_cap_rank}
                    coinTotSup={props._cD.market_data.total_supply}
                    coinCirSup={props._cD.market_data.circulating_supply}
                    coinMaxSup={props._cD.market_data.max_supply}
                    priceChng1h={
                      props._cD.market_data
                        .price_change_percentage_1h_in_currency.usd
                    }
                  />
                  {/* second block */}
                  <CoinSecondDataBlock
                    mktCap={props._cD.market_data.market_cap.usd}
                    totVol={props._cD.market_data.total_volume.usd}
                    high24h={props._cD.market_data.high_24h.usd}
                    low24h={props._cD.market_data.low_24h.usd}
                    priceChng24h={
                      props._cD.market_data.price_change_percentage_24h
                    }
                    priceChng7d={
                      props._cD.market_data.price_change_percentage_7d
                    }
                    priceChng14d={
                      props._cD.market_data.price_change_percentage_14d
                    }
                    priceChng30d={
                      props._cD.market_data.price_change_percentage_30d
                    }
                  />
                </div>
              </div>
              {/* third block */}
              <CoinChartBlock
                mktData={props._mC}
                chngPrcnt={
                  props._cD.market_data.price_change_percentage_1h_in_currency.usd
                }
              />
              <div className="row mb-4">
                {/* <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h6>Messages</h6>
                    </div>
                    <div className="list-group list-group-flush">
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action"
                      >
                        <div
                          className="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-1.jpg"
                              className="avatar rounded-circle"
                            />
                          </div>
                          <div className="flex-fill ml-3">
                            <div className="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small className="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p className="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action"
                      >
                        <div
                          className="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-2.jpg"
                              className="avatar rounded-circle"
                            />
                          </div>
                          <div className="flex-fill ml-3">
                            <div className="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small className="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p className="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action"
                      >
                        <div
                          className="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-3.jpg"
                              className="avatar rounded-circle"
                            />
                          </div>
                          <div className="flex-fill ml-3">
                            <div className="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small className="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p className="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action"
                      >
                        <div
                          className="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-4.jpg"
                              className="avatar rounded-circle"
                            />
                          </div>
                          <div className="flex-fill ml-3">
                            <div className="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small className="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p className="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-footer py-3 text-center border-0 position-relative">
                      <a
                        href="profile.html#"
                        className="text-xs ls-1 text-uppercase font-weight-bold stretched-link"
                      >
                        See all
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h6>Alerts</h6>
                    </div>
                    <div className="list-group list-group-flush">
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div className="d-flex">
                          <div>
                            <i className="mr-3"></i>
                          </div>
                          <div>
                            <div className="text-sm lh-150">
                              Mail sent to{" "}
                              <span className="text-dark font-weight-bold">
                                Alex Michael
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div className="d-flex">
                          <div>
                            <i className="mr-3"></i>
                          </div>
                          <div>
                            <div className="text-sm lh-150">
                              You liked a comment from{" "}
                              <span className="text-dark font-weight-bold">
                                Sandra Wayne
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div className="d-flex">
                          <div>
                            <i className="mr-3"></i>
                          </div>
                          <div>
                            <div className="text-sm lh-150">
                              New likes from{" "}
                              <span className="text-dark font-weight-bold">
                                Jason Miller
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div className="d-flex">
                          <div>
                            <i className="mr-3"></i>
                          </div>
                          <div>
                            <div className="text-sm lh-150">
                              You are now in team with{" "}
                              <span className="text-dark font-weight-bold">
                                Mike Thomson
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        className="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div className="d-flex">
                          <div>
                            <i className="mr-3"></i>
                          </div>
                          <div>
                            <div className="text-sm lh-150">
                              Mail sent to{" "}
                              <span className="text-dark font-weight-bold">
                                Richard Nixon
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-footer py-3 text-center mt-3 position-relative">
                      <a
                        href="profile.html#"
                        className="text-xs ls-1 text-uppercase font-weight-bold stretched-link"
                      >
                        See all
                      </a>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="h6">Reminder</span>
                        </div>
                        <div className="text-right">
                          <span className="h6 font-weight-light text-muted">
                            23 May, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body py-3">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <div className="icon icon-shape bg-warning">
                            <i className="fas fa-calendar-day text-white"></i>
                          </div>
                        </div>
                        <div className="pl-3">
                          <h6 className="text-warning mb-0">Chat with Dave</h6>
                        </div>
                        <div className="ml-auto text-right">
                          <a
                            href="profile.html#"
                            className="text-warning text-sm text-underline--dashed"
                          >
                            See all events
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const _cD = await coinGecko.get(`/coins/${params.slug}`).then((r) => r.data);
  const _mC = await coinGecko
    .get(`/coins/${params.slug}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: 1,
        interval: "hourly",
      },
    })
    .then((r) => r.data);
  return {
    props: { _cD: _cD, _mC: _mC },
  };
};

export default CoinDetails;
