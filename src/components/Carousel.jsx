import { Button, Carousel } from "react-bootstrap";
import img1 from "../img/banner-2.jpg";
import img2 from "../img/banner3.jpg";

const CarouselComponent = () => {
  return (
    <Carousel>
     
      <Carousel.Item style={{maxHeight:'500px' , height:'auto' }}>
        <img className="d-block w-100" src={img2} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>this is a deacription</p>
          <Button className="" style={{backgroundColor:'#000000' ,border:'none'}}>Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{maxHeight:'500px' , height:'auto'}}>
        <img className="d-block w-100" src={img1} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>this is a deacription</p>
          <Button className="">Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{maxHeight:'500px' , height:'auto'}}>
        <img className="d-block w-100" src={img1} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <Button className="">Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
};

export default CarouselComponent;
