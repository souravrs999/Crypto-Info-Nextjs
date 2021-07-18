export default function Legend({ children }) {
  return (
    // <div className="card mb-3 hover-shadow-lg">
    //   <div className="card-body d-flex bg-light-dark align-items-center flex-wrap flex-lg-nowrap py-0 pt-2 pb-2 rounded">
    //     <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">Coin</span>
    //     </div>
    //     <div className="col-lg-2 col-8 pl-0 pl-lg-5 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">1h</span>
    //     </div>
    //     <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">24h</span>
    //     </div>
    //     <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">7d</span>
    //     </div>
    //     <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">24h Volume</span>
    //     </div>
    //     <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
    //       <span className="h6 text-sm text-light">Mkt Cap</span>
    //     </div>
    //   </div>
    // </div>

    <div className="row mt-4">
      <div className="col-lg-12">
        <div className="mb-5">
          <div className="table-responsive">
            <table className="table table-cards align-items-center">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: "240px" }}>
                    Coin
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">1h</th>
                  <th scope="col">24h</th>
                  <th scope="col">7d</th>
                  <th scope="col">24h Volume</th>
                  <th scope="col">Mkt Cap</th>
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
