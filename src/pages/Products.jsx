import ItemCard from "../components/ItemCard";
import ButtonGroupBar from "../components/ButtonGroup";
import FilterProducts from "../components/FilterProducts";

const ProductsPage = () => {
  return (
    <div>
      <h2 className="my-2">Products</h2>
      <FilterProducts />
      <div className="container-flud mx-4">
        <div className="row">
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
        </div>
        
        <div className="row">
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
          <div className="col-xxl-2 col-xl-4 col-lg-5 col-md-5 col-sm-6 my-2">
            <ItemCard />
          </div>
        </div>
        <ButtonGroupBar />
      </div>
    </div>
  );
};

export default ProductsPage;
