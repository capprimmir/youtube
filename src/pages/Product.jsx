import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer =styled.div`
  width: 50%;
  margin:30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter =styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle =styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor =styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize =styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption =styled.option``;

const AddContainer =styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmmountContainer =styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`;

const Ammount =styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-weight: 700;
  cursor: pointer;
`;

const Button =styled.button`
  padding: 15px;
  border: 2px solid teal;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: #f8f4f4;;
  }
`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.pexels.com/photos/1353029/pexels-photo-1353029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum quidem, aliquid dicta ullam quo, perferendis possimus earum error eligendi, blanditiis animi labore. Exercitationem aperiam doloremque pariatur nostrum perferendis. Deleniti.
          </Desc>
          <Price>$25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="grey"/>
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <Remove/>
              <Ammount>1</Ammount>
              <Add/>
            </AmmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product