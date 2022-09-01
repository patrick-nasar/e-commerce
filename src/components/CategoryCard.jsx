import { Button } from "react-bootstrap";
import img1 from "../img/banner-2.jpg";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from "react-router-dom";
const CategoryCard = () => {
  return (
    <div
      className="card card-background bg-image mb-2"
      style={{
        backgroundImage: `url(${img1})`,
        height: "375px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        boxShadow: "0px 0px 16px rgba(17, 17, 26, 0.1) ",
      }}
    >
      <div className="table" style={{ position: "absolute", bottom: 0 }}>
        <h5 className="category" style={{ color: "white", border: "0" }}>
          Title
        </h5>
        <Link to='/Products'
          style={{ backgroundColor: "white", color: "black", border: "none" }}
        >
          Go to Category <ArrowForwardIosOutlinedIcon style={{fontSize:'medium'}} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
