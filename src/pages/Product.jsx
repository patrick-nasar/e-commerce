import { Button, Dropdown, Form } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import img1 from "../img/banner-2.jpg";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductPage = () => {
  return (
    <div>
      <div className="my-2 mx-3 ">
        <div className="row ">
          <div className="col-xl-6 col-lg-5 col-md-6 col-sm-6">
            <img
              src={img1}
              style={{
                height: "400px",
                width: "100%",
                boxShadow: "3px 3px 3px 3px gray",
              }}
            ></img>
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 " style={{ alignContent: "revert" }}>
            <h1 className="my-4 d-flex" style={{ alignItems: "center" }}>
              Item name
            </h1>

            <p className="my-3 d-flex">This is a decription for the product</p>
            <p className="my-3 d-flex">Company:</p>
            
            <div className="row" style={{paddingLeft:'0px'}}>
              <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-1 d-flex">
                <Form className="">
                  <Form.Control
                    type="number"
                    placeholder="Quntity"
                    style={{ borderColor: "black" }}
                  />
                </Form>
              </div>

              <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-1 d-flex ">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      borderColor: "black",
                      backgroundColor: "transparent",
                      color: "black",
                    }}
                  >
                    Color
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="d-flex">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "Black",
                        }}
                      ></div>
                      <span className="mx-2">Black</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "White",
                        }}
                      ></div>
                      <span className="mx-2">White</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "red",
                        }}
                      ></div>
                      <span className="mx-2">Red</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "blue",
                        }}
                      ></div>
                      <span className="mx-2">Blue</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
              <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-1 d-flex">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      borderColor: "black",
                      backgroundColor: "transparent",
                      color: "black",
                    }}
                  >
                    Size
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Larg</Dropdown.Item>
                    <Dropdown.Item>M</Dropdown.Item>
                    <Dropdown.Item>Small</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <Button
              className="d-flex mt-4"
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  borderColor: "black",
                  
                }}
                
              >
                Add to cart <AddShoppingCartOutlinedIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-3 p-2" style={{ backgroundColor: "yellow" }}>
          You also might like
        </h3>
        <div className="container mb-2">
          <div className="row">
            <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6">
              <ItemCard />
            </div>
            <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6">
              <ItemCard />
            </div>
            <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6">
              <ItemCard />
            </div>
          </div>

          <Button className="my-2">Go to category</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
