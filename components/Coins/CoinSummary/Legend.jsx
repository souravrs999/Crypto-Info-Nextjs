const Legend = ({ children }) => {
  return (
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
};

export default Legend;
