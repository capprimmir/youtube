import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Annoucements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from "../responsive"

const Container = styled.div``;

const Title = styled.h1``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const ProductFilter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px"})};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px"})};
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Annoucements/>
      <Title>Dresses</Title>
      <FilterContainer>
        <ProductFilter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </ProductFilter>
        <ProductFilter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </ProductFilter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
