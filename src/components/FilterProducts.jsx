import { useState } from "react";
import { Dropdown, Form, DropdownButton, Button, Modal } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const FilterProducts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex bd-highlight mx-4 my-2">
      {/**Right Side */}
      <div className="form-outline p-2">
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            style={{ borderColor: "black", marginRight: "5px" }}
          />
          <Button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Search
          </Button>
        </Form>
      </div>
      {/**Filter------------------------------------------- */}
      <div className="me-auto p-2 bd-highlight">
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Filter <FilterAltOutlinedIcon />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/**Size ---------------------------------------------- */}
            <div className="d-flex">
              <div className="row">
                <div className="col" style={{paddingRight:'1px'}}>
                  <span className="" style={{ fontWeight: "bold" }}>
                    Size:
                  </span>
                </div>
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check type="switch" id="custom-switch" label="Larg" />
                  </Form>
                </div>
                |
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Medium"
                    />
                  </Form>
                </div>
                |
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Small"
                    />
                  </Form>
                </div>
              </div>
            </div>
            <hr />
            {/**Color ---------------------------------------------- */}
            <div className="d-flex">
              <div className="row">
                <div className="col d-flex" style={{paddingRight:'1px'}}>
                  <span className="" style={{ fontWeight: "bold"}}>
                    Color:
                  </span>
                </div>
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Black"
                    />
                  </Form>
                </div>
                |
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="White"
                    />
                  </Form>
                </div>
                |
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check type="switch" id="custom-switch" label="Red" />
                  </Form>
                </div>
                |
                <div className="col d-flex">
                  <Form className="mx-1">
                    <Form.Check type="switch" id="custom-switch" label="Blue" />
                  </Form>
                </div>
              </div>
            </div>
            <hr />

            {/**Price ---------------------------------------------- */}
            <div className="d-flex">
              <span className=" py-2" style={{ fontWeight: "bold" }}>
                Price:
              </span>
              <Form className="mx-2">
                <Form.Control
                  type="number"
                  placeholder="From. Ex:20"
                  style={{ borderColor: "black" }}
                />
              </Form>
              <Form>
                <Form.Control
                  type="number"
                  placeholder="To. Ex:40"
                  style={{ borderColor: "black" }}
                />
              </Form>
            </div>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Done</Button>
          </Modal.Footer>
        </Modal>

        {/**        <Dropdown style={{ border: "none" }} autoClose="outside" >
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Filter
            <FilterAltOutlinedIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ border: "none" }}>
            {/**Size dropend --------------------------------------------------------
            <Dropdown drop="end" autoClose="outside">
              <Dropdown.Toggle
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "black",
                }}
              >
                Size
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-4 ">
                  <Form>
                    <Form.Check type="switch" id="custom-switch" label="Larg" />
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4 ">
                  <Form>
                    <Form.Check type="switch" id="custom-switch" label="M" />
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4 ">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Small"
                    />
                  </Form>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Divider />
            {/**Color dropend ------------------------------------------------
            <Dropdown drop="end" autoClose="outside">
              <Dropdown.Toggle
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "black",
                }}
              >
                Color
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <Form>
                    <Form.Check type="switch" id="custom-switch" label="red" />
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Black"
                    />
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="White"
                    />
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Form>
                    <Form.Check type="switch" id="custom-switch" label="Blue" />
                  </Form>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Divider />
            <Dropdown.ItemText>Price</Dropdown.ItemText>
            <Form.Control
              type="text"
              placeholder="Search"
              style={{ borderColor: "black" }}
              className="my-1"
            />

            <Dropdown.Item
              className="btn text-center"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>  */}
      </div>

      {/**Left Side */}
      <div className="p-2 bd-highlight">
        <Dropdown style={{ border: "none" }}>
          <DropdownToggle
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Sort by <SortIcon />
          </DropdownToggle>
          <Dropdown.Menu>
            <Dropdown.ItemText
              className="text-center"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item>Low to high</Dropdown.Item>
            <Dropdown.Item>high to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/**<div class="p-2 bd-highlight">Flex item</div> */}
    </div>
  );
};

export default FilterProducts;
