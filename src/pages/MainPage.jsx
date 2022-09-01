import CarouselComponent from "../components/Carousel";
import CatigoresMain from "../components/CategoriesMainPage";
import TopItemMain from "../components/TopItemsMainPage";
import SearchMain from "../components/SearchMainPage";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <CarouselComponent />
      <TopItemMain />
      <CatigoresMain />
    </div>
  );
};

export default MainPage;
