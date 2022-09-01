import { Button } from "react-bootstrap";
import ItemCard from "./ItemCard";

const TopItemMain = () => {
  return (
    <div>
      <h1 className="my-2 p-2">Top Items</h1>
      <div className="container">
        <div className="row">
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2"><ItemCard/> </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2"><ItemCard/> </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2"><ItemCard/> </div>
        </div>
        <Button className="mt-2">See More</Button>
      </div>
    </div>
  );
};

export default TopItemMain;