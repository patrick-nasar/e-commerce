import CategoryCard from "../components/CategoryCard";
import FilterCategories from "../components/FilterCategories";
import ItemCard from "../components/ItemCard";

const CategoriesPage = () => {
  return (
    <div style={{ overflow: "hidden" }} className='mb-2'>
      <h2 className="mt-2 mb-2">Categories</h2>
      <FilterCategories/>
      <div className="container">
        <div className="row">
          <div className="col">
            <CategoryCard />
          </div>
          <div className="col">
            <CategoryCard />
          </div>
          <div className="col">
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
