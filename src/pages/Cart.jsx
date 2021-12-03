import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Announcements';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import {mobile} from "../responsive"


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px"})};
`;

const Title = styled.h1`
  font-weight: 300;
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
  cursor:pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none"})};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})};
`;

const Info = styled.div`
  flex:3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})};
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
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
  background-color: ${props => props.color};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 5px;
`;

const ProductSize = styled.span``;

const PriceSummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmmount = styled.div`
  font-size: 25px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px"})}
  `;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "25px"};
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



const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Whish List(0)</TopText>
          </TopTexts>
          <TopButton type="filled"> CHECKOUT NOW </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_38/1609733/51twzu8bkal-5f60d6b3af6ae.jpg"/>
                <Details>
                  <ProductName><b>Product:</b> FLORAL DRESS</ProductName>
                  <ProductId><b>ID:</b> 123456789</ProductId>
                  <ProductColor color="brown"/>
                  <ProductSize><b>Size:</b> Medium</ProductSize>
                </Details>
              </ProductDetails>
              <PriceSummary>
                <ProductAmmountContainer>
                  <Add/>
                  <ProductAmmount>2</ProductAmmount>
                  <Remove/>
                </ProductAmmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceSummary>
            </Product>
            <Hr/>
            <Product>
              <ProductDetails>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_E9GbGqSPXOKR8L8hliAJbUC6kSmqsCy6w&usqp=CAU"/>
                <Details>
                  <ProductName><b>Product:</b> Black Boot</ProductName>
                  <ProductId><b>ID:</b> 876554322</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size:</b> 8.5</ProductSize>
                </Details>
              </ProductDetails>
              <PriceSummary>
                <ProductAmmountContainer>
                  <Add/>
                  <ProductAmmount>1</ProductAmmount>
                  <Remove/>
                </ProductAmmountContainer>
                <ProductPrice>$40</ProductPrice>
              </PriceSummary>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 4.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -4.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 70</SummaryItemPrice>
            </SummaryItem> 
            <Button>CHECKOUT NOW</Button>          
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
