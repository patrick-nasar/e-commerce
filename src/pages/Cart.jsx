import styled from "styled-components";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile } from "../responsive";
import img1 from "../img/banner3.jpg";
import { Form } from "react-bootstrap";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  overflow: hidden;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const ProductPrice = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const TotalProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  position: sticky;
  top: 0;
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
`;

const CartPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR CART</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopText>4 Items In Your Cart</TopText>
          <TopButton type="filled">
            CHECKOUT NOW <ShoppingBagOutlinedIcon />
          </TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName className="d-flex mb-1">
                    <b>Product:</b> Product 1
                  </ProductName>
                  <ProductId className="d-flex mb-1">
                    <b>ID:</b> 93813718293
                  </ProductId>

                  <ProductColor className="d-flex mb-1" color="black" />
                  <ProductSize className="d-flex mb-1 ">
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductPrice className="d-flex">
                    <b>Price:</b> $ 20
                  </ProductPrice>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <DeleteButton>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                </ProductAmountContainer>

                <ProductAmountContainer>
                  {/**     <AddOutlinedIcon /> */}
                  <ProductAmount>
                    <Form>
                      <Form.Control
                        type="number"
                        placeholder="Quntity"
                        style={{ borderColor: "black", width: "100px" }}
                      />
                    </Form>
                  </ProductAmount>
                  {/**  <RemoveOutlinedIcon /> */}
                </ProductAmountContainer>
                <TotalProductPrice>$ 30</TotalProductPrice>
              </PriceDetail>
            </Product>
            <hr style={{ width: "94%" }} />
            
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName className="d-flex mb-1">
                    <b>Product:</b> Product 1
                  </ProductName>
                  <ProductId className="d-flex mb-1">
                    <b>ID:</b> 93813718293
                  </ProductId>

                  <ProductColor className="d-flex mb-1" color="black" />
                  <ProductSize className="d-flex mb-1 ">
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductPrice className="d-flex">
                    <b>Price:</b> $ 20
                  </ProductPrice>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <DeleteButton>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                </ProductAmountContainer>

                <ProductAmountContainer>
                  {/**     <AddOutlinedIcon /> */}
                  <ProductAmount>
                    <Form>
                      <Form.Control
                        type="number"
                        placeholder="Quntity"
                        style={{ borderColor: "black", width: "100px" }}
                      />
                    </Form>
                  </ProductAmount>
                  {/**  <RemoveOutlinedIcon /> */}
                </ProductAmountContainer>
                <TotalProductPrice>$ 130</TotalProductPrice>
              </PriceDetail>
            </Product>
            <hr style={{ width: "94%" }} />
            
            
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName className="d-flex mb-1">
                    <b>Product:</b> Product 2
                  </ProductName>
                  <ProductId className="d-flex mb-1">
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <div className="d-flex">
                    <ProductColor className="d-flex mb-1 " color="gray" /> Gray
                  </div>
                  <ProductSize className="d-flex mb-1">
                    <b>Size:</b> M
                  </ProductSize>
                  <ProductPrice className="d-flex">
                    <b>Price:</b> $ 20
                  </ProductPrice>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <DeleteButton>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                </ProductAmountContainer>
                <ProductAmountContainer>
                  {/** <AddOutlinedIcon />*/}
                  <Form>
                    <Form.Control
                      type="number"
                      placeholder="Quntity"
                      style={{ borderColor: "black", width: "100px" }}
                    />
                  </Form>
                  {/**<RemoveOutlinedIcon />*/}
                </ProductAmountContainer>
                <TotalProductPrice>$ 20</TotalProductPrice>
              </PriceDetail>
            </Product>

            <hr />
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName className="d-flex mb-1">
                    <b>Product:</b> Product 3
                  </ProductName>
                  <ProductId className="d-flex mb-1">
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor className="d-flex mb-1" color="gray" />
                  <ProductSize className="d-flex mb-1">
                    <b>Size:</b> M
                  </ProductSize>
                  <ProductPrice className="d-flex">
                    <b>Price:</b> $ 20
                  </ProductPrice>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <DeleteButton>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                </ProductAmountContainer>
                <ProductAmountContainer>
                  {/** <AddOutlinedIcon />*/}
                  <Form>
                    <Form.Control
                      type="number"
                      placeholder="Quntity"
                      style={{ borderColor: "black", width: "100px" }}
                    />
                  </Form>
                  {/**<RemoveOutlinedIcon />*/}
                </ProductAmountContainer>
                <TotalProductPrice>$ 20</TotalProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary className="">
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>I don't know</SummaryItemText>
              <SummaryItemPrice>$ 52.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>
              CHECKOUT NOW <ShoppingBagOutlinedIcon />
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartPage;
