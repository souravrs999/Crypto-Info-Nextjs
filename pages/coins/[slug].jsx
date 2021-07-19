import Image from "next/image";

import CoinFirstDataBlock from "../../components/Coins/CoinFirstDataBlock";
import CoinSecondDataBlock from "../../components/Coins/CoinSecondDataBlock";

const CoinDetails = (props) => {
  return (
    <>
      <section class="slice slice-sm">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div>
                <div class="row align-items-center mb-3">
                  <div class="col">
                    <h6 class="mb-0">Coin Stats</h6>
                  </div>
                </div>
                <div class="row">
                  {/* first block */}
                  <CoinFirstDataBlock
                    coinName={props.coinData.name}
                    coinImage={props.coinData.image}
                    currentPrice={props.coinData.market_data.current_price.usd}
                    marketCR={props.coinData.market_cap_rank}
                    coinTotSup={props.coinData.market_data.total_supply}
                    coinCirSup={props.coinData.market_data.circulating_supply}
                    coinMaxSup={props.coinData.market_data.max_supply}
                    priceChng1h={
                      props.coinData.market_data
                        .price_change_percentage_1h_in_currency.usd
                    }
                  />
                  {/* second block */}
                  <CoinSecondDataBlock
                    mktCap={props.coinData.market_data.market_cap.usd}
                    totVol={props.coinData.market_data.total_volume.usd}
                    high24h={props.coinData.market_data.high_24h.usd}
                    low24h={props.coinData.market_data.low_24h.usd}
                    priceChng24h={
                      props.coinData.market_data.price_change_percentage_24h
                    }
                    priceChng7d={
                      props.coinData.market_data.price_change_percentage_7d
                    }
                    priceChng14d={
                      props.coinData.market_data.price_change_percentage_14d
                    }
                    priceChng30d={
                      props.coinData.market_data.price_change_percentage_30d
                    }
                  />
                </div>
              </div>
              {/* third block */}
              <div class="row mb-4">
                {/* <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <h6>Messages</h6>
                    </div>
                    <div class="list-group list-group-flush">
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action"
                      >
                        <div
                          class="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-1.jpg"
                              class="avatar rounded-circle"
                            />
                          </div>
                          <div class="flex-fill ml-3">
                            <div class="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small class="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p class="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action"
                      >
                        <div
                          class="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-2.jpg"
                              class="avatar rounded-circle"
                            />
                          </div>
                          <div class="flex-fill ml-3">
                            <div class="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small class="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p class="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action"
                      >
                        <div
                          class="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-3.jpg"
                              class="avatar rounded-circle"
                            />
                          </div>
                          <div class="flex-fill ml-3">
                            <div class="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small class="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p class="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action"
                      >
                        <div
                          class="d-flex align-items-center"
                          data-title="2 hrs ago"
                        >
                          <div>
                            <img
                              alt="Image placeholder"
                              src="/img/theme/light/person-4.jpg"
                              class="avatar rounded-circle"
                            />
                          </div>
                          <div class="flex-fill ml-3">
                            <div class="h6 text-sm mb-0">
                              Alex Michael{" "}
                              <small class="float-right text-muted">
                                2 hrs ago
                              </small>
                            </div>
                            <p class="text-sm lh-140 mb-0">
                              Some quick example text to build on the card
                              title.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="card-footer py-3 text-center border-0 position-relative">
                      <a
                        href="profile.html#"
                        class="text-xs ls-1 text-uppercase font-weight-bold stretched-link"
                      >
                        See all
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      <h6>Alerts</h6>
                    </div>
                    <div class="list-group list-group-flush">
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div class="d-flex">
                          <div>
                            <i class="mr-3"></i>
                          </div>
                          <div>
                            <div class="text-sm lh-150">
                              Mail sent to{" "}
                              <span class="text-dark font-weight-bold">
                                Alex Michael
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div class="d-flex">
                          <div>
                            <i class="mr-3"></i>
                          </div>
                          <div>
                            <div class="text-sm lh-150">
                              You liked a comment from{" "}
                              <span class="text-dark font-weight-bold">
                                Sandra Wayne
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div class="d-flex">
                          <div>
                            <i class="mr-3"></i>
                          </div>
                          <div>
                            <div class="text-sm lh-150">
                              New likes from{" "}
                              <span class="text-dark font-weight-bold">
                                Jason Miller
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div class="d-flex">
                          <div>
                            <i class="mr-3"></i>
                          </div>
                          <div>
                            <div class="text-sm lh-150">
                              You are now in team with{" "}
                              <span class="text-dark font-weight-bold">
                                Mike Thomson
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile.html#"
                        class="list-group-item list-group-item-action border-0 py-2"
                      >
                        <div class="d-flex">
                          <div>
                            <i class="mr-3"></i>
                          </div>
                          <div>
                            <div class="text-sm lh-150">
                              Mail sent to{" "}
                              <span class="text-dark font-weight-bold">
                                Richard Nixon
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="card-footer py-3 text-center mt-3 position-relative">
                      <a
                        href="profile.html#"
                        class="text-xs ls-1 text-uppercase font-weight-bold stretched-link"
                      >
                        See all
                      </a>
                    </div>
                  </div>
                  <div class="card mb-0">
                    <div class="card-header">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <span class="h6">Reminder</span>
                        </div>
                        <div class="text-right">
                          <span class="h6 font-weight-light text-muted">
                            23 May, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="card-body py-3">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <div class="icon icon-shape bg-warning">
                            <i class="fas fa-calendar-day text-white"></i>
                          </div>
                        </div>
                        <div class="pl-3">
                          <h6 class="text-warning mb-0">Chat with Dave</h6>
                        </div>
                        <div class="ml-auto text-right">
                          <a
                            href="profile.html#"
                            class="text-warning text-sm text-underline--dashed"
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

export const getStaticPaths = async () => {
  const coins = await fetch(
    `${process.env.COINGECKO_API_BASE_URL}/coins/list`
  ).then((r) => r.json());
  return {
    paths: coins.map((coin) => ({
      params: {
        slug: String(coin.id),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const coinData = await fetch(
    `${process.env.COINGECKO_API_BASE_URL}/coins/${params.slug}`
  ).then((r) => r.json());
  return {
    props: {
      coinData: coinData,
    },
    revalidate: 2,
  };
};

export default CoinDetails;
