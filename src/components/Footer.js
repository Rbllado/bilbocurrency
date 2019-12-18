import React from "react";


function Footer() {
  return (
    <footer class="bg-dark text-white mt-4">
      <div class="container-fluid py-3">
        <div class="row">
        <div class="col-md-6">
            <img src="/images/logo.jpg" className="logo-footer" alt="logo"/>
          </div>
          <div class="col-sm-6" className="name-footer">
            <h5>Rafael</h5>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12 footer-donation">Donate:</div>
          <div class="col-md-12 footer-donation">BTC: 3Du8399JyrwunE75YDZYc7je6qvTyNisTH</div>
          <div class="col-md-12 footer-donation">ETH: 0x8BdA2BFD07eaF15895b410996174cbA9cd97B3DB</div>
          <div class="col-md-12 footer-donation">LTC: MFQV3CfWNytC2LRkK9qGsjm12gh67cxPEx</div>
          {/* <div class="col-md-3 text-right small align-self-end">
            Bilbocurrency
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
