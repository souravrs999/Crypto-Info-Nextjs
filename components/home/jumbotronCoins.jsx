import { MoreHorizontal, RefreshCcw, DollarSign } from "react-feather";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect, useCallback } from "react";

import RecursiveTimeout  from "./recursiveTimeout";

const AUTOPLAY_INTERVAL = 5000;

export default function JumbotronCoins({ coins }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false });

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
              {coins.map((coin) => (
                <div
                  className="col-lg-3 col-sm-6 embla__slide"
                  key={coin.coingecko_rank}
                >
                  <div className="card mb-3">
                    {/* card header */}
                    <div className="card-header pb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="h6"></span>
                        </div>
                        <div className="text-right">
                          <div className="actions mr-n2">
                            <a href="#" className="action-item">
                              <RefreshCcw size={15} />
                            </a>
                            <div
                              className="dropdown action-item"
                              data-toggle="dropdown"
                            >
                              <a href="#" className="action-item">
                                <MoreHorizontal size={15} />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  Refresh
                                </a>
                                <a href="#" className="dropdown-item">
                                  Manage Widgets
                                </a>
                                <a href="#" className="dropdown-item">
                                  Settings
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* card body */}
                    <div className="card-body pt-0">
                      {/* card logo */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="icon icon-sm">
                            <img
                              alt="Image placeholder"
                              src={coin.image.small}
                              className="svg-inject"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="badge badge-xs badge-circle rounded-circle badge-success">
                                <DollarSign size={12} />
                              </span>
                            </div>
                            <div className="pl-2">
                              <small className="h6 text-xs text-success">
                                {coin.market_data.current_price.usd}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* card title */}
                      <div className="mt-3">
                        <h6 className="mb-0">
                          {coin.name} ({coin.symbol})
                        </h6>
                        <p className="mb-0 text-sm text-muted"></p>
                      </div>
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
}
