import { Button } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoriesMain = () => {
  return (
    <div>
      <h1 className="mt-2 p-2">Categories</h1>
      <div className="container">
        <div className="row">
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <CategoryCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <CategoryCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <CategoryCard />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-2"></div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <CategoryCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <CategoryCard />
          </div>

          <div className="col-2"></div>
        </div>
        <Button className="p-2 my-2 "> Show all categorys</Button>
      </div>
    </div>
  );
};

export default CategoriesMain;
