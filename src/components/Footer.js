import React from "react";


function Footer() {
  return (
    <footer className="bg-dark text-white mt-4">
      <div className="container-fluid py-3">
        <div className="row">
        <div className="col-md-6">
            <img src="/images/logo.jpg" className="logo-footer" alt="logo"/>
          </div>
          <div className="col-sm-6" className="name-footer">
            <h5>Rafael</h5>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 footer-donation">Donate:</div>
          <div className="col-md-12 footer-donation">BTC: 3Du8399JyrwunE75YDZYc7je6qvTyNisTH</div>
          <div className="col-md-12 footer-donation">ETH: 0x8BdA2BFD07eaF15895b410996174cbA9cd97B3DB</div>
          <div className="col-md-12 footer-donation">LTC: MFQV3CfWNytC2LRkK9qGsjm12gh67cxPEx</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
