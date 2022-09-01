import { Button, Form } from "react-bootstrap";

const SearchMain = () => {
  return (
    <div>
      <div className="d-flex justify-content-start p-4">
        <Form className=" d-flex">
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
    </div>
  );
};

export default SearchMain;
