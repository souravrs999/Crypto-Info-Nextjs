import Head from "next/head";
import Image from "next/image";

import { FavCoins } from "../utils/favCoins";
import Credits from "../components/home/credits";
import JumbotronCoins from "../components/home/jumbotronCoins";
import TrendingCoins from "../components/home/TrendingCoins";

export default function Home({ coins }) {
  return (
    <>
      <section className="slice pt-md-8 pb-0 bg-section-dark">
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
                    className="btn btn-primary btn-icon d-none d-lg-inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Crypto Markets
                  </a>
                  <a href="index.html#" className="btn btn-white btn-icon">
                    <span className="btn-inner--text">Trending Coins</span>
                    <span className="btn-inner--icon">
                      <i data-feather="arrow-right"></i>
                    </span>
                  </a>
                </div>
                <Credits />
              </div>
              <div className="col-12 col-lg-6 mt-7 mt-lg-0">
                <div className="position-relative left-8 left-lg-0">
                  <figure>
                    <img
                      alt="Image placeholder"
                      src="/img/crypto-around-world-light.png"
                      className="img-fluid mw-lg-120 rounded-top zindex-100"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JumbotronCoins coins={coins} />
    </>
  )
}

export const getStaticProps = async () => {
  const coins = await Promise.all(
    FavCoins.map(async (item) => {
      const data = await (
        await fetch(`https://api.coingecko.com/api/v3/coins/${item}`)
      ).json();
      return data;
    })
  );

  return {
    props: {
      coins,
    },
    revalidate: 10,
  };
};
