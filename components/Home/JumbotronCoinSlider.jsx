import Image from "next/image";
import { DollarSign } from "react-feather";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect, useCallback } from "react";

import RecursiveTimeout from "./utils/recursiveTimeout";
import CoinCardContent from "./CoinCardContent";

const AUTOPLAY_INTERVAL = 4000;

const JumbotronCoins = (props) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: true });

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = RecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <>
      <section className="slice jumbotron-row">
        <div className="container position-relative zindex-100">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {props.coins.map((coin) => (
                <div
                  className="col-lg-3 col-sm-6 embla__slide"
                  key={coin._tC.coingecko_rank}
                >
                  <div className="card mb-3">
                    <div className="card-body pt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="icon icon-sm">
                            <Image
                              alt="Image placeholder"
                              src={coin._tC.image.small}
                              className="svg-inject"
                              height={50}
                              width={50}
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="d-flex align-items-center">
                            <div>
                              <DollarSign size={12} />
                            </div>
                            <div className="pl-2">
                              <small className="h6 text-xs text-success">
                                {coin._tC.market_data.current_price.usd}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <CoinCardContent
                        coinName={coin._tC.name}
                        chngPrcnt={
                          coin._tC.market_data.market_cap_change_percentage_24h
                        }
                        mktData={coin._mC}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JumbotronCoins;
