import { Form } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div>
      <section className="vh-200" style={{ backgroundColor: "#886465    " }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ height: "100%", borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">A.P.S</span>
                      </div>
                      <div className="d-flex">
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Join us
                        </h5>
                      </div>
                      <div className="form-outline mb-4">
                        <Form>
                          <Form.Control
                            type="text"
                            placeholder="User Name"
                            style={{ borderColor: "black" }}
                          />
                        </Form>
                      </div>

                      <div className="form-outline mb-4 ">
                        <Form>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            style={{ borderColor: "black" }}
                          />
                        </Form>
                      </div>

                      <div className="form-outline mb-4 ">
                        <Form>
                          <Form.Control
                            type="text"
                            placeholder="Adress"
                            style={{ borderColor: "black" }}
                          />
                        </Form>
                      </div>

                      <div className="form-outline mb-4 ">
                        <Form>
                          <Form.Control
                            type="number"
                            placeholder="Phone Number"
                            style={{ borderColor: "black" }}
                          />
                        </Form>
                      </div>

                      <Form className="d-flex mb-2">
                        <Form.Check
                          type="radio"
                          label="male"
                          className="mx-2"
                        />
                        <Form.Check
                          type="radio"
                          label="Femal"
                          className="mx-2"
                        />
                      </Form>

                      <div className="pt-1 mb-4 ">
                        <button
                          className="btn btn-dark btn-lg btn-block d-flex"
                          type="button"
                        >
                          Register
                        </button>
                      </div>

                      <a href="#!" className="small text-muted d-flex">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted d-flex">
                        Privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterPage;
