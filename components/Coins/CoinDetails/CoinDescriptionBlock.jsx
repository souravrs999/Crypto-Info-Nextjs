const CoinDescriptionBlock = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card shadow-lg rounded-lg mb-0">
          <div className="px-5 py-5">
            <p
              className="lead lh-180"
              dangerouslySetInnerHTML={{ __html: props._cDesc }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDescriptionBlock;
