import img1 from "../img/banner3.jpg";
import styled from "styled-components";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";

const ItemCard = () => {
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff10;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  `;

  const Title = styled.h3`
  
  `;
  const Price = styled.b`
  margin: 12px;
  `

  const Container = styled.div`
    &:hover ${Info} {
      opacity: 1;
    }
  `;


  return (
    <div>
      <Container
        className="card card-background"
        style={{
          backgroundImage: `url(${img1})`,
          height: "375px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Info>
          <div className="row" style={{maxWidth:'90%'}}> 
            <Title>Pasasdsa</Title>
            <b className="my-1"> $ 70 </b>
            <Link
            to='Product'
              className="btn btn-round shadow-none "
              style={{ color: "white", background: "black" }}
            >
              View Product<ArrowCircleRightOutlinedIcon />
            </Link>
          </div>
        </Info>
      </Container>
    </div>
  );
};

export default ItemCard;
