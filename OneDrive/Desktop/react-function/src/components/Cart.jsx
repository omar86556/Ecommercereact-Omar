import React from 'react'

function Cart({ prods, pts }) {
  console.log(pts?.wprice, "this is price")


  return (
    <div>
      <div>
        <section className="h-100 h-custom" style={{ backgroundcolor: "#d2c9ff" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 d-flex">
                <div className="card card-registration card-registration-2" style={{ borderradius: "15px" }}>
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0">Shopping Cart</h1>
                            <h6 className="mb-0 text-muted">{pts.length} items</h6>
                          </div>
                          <hr className="my-4" />

                          {pts.map((e, i) => (
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={e?.image}
                                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">

                                <h6 className="mb-0">{e?.catagory}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                  className="form-control form-control-sm" />

                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">€ {e?.price}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                              </div>
                            </div>
                          ))}

                          <hr className="my-4" />

                          
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark">Register</button>

                        </div>
                      </div>
                    </div>
                  </div>
                    <h1>
                      {/* €  {(pts?.price).reduce((a, v)=>v+a, 0)} */}
                    </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cart
