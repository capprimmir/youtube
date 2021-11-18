import { CreditCard, Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.h1`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #36c786;
`;

const Title= styled.h3`
  margin-bottom: 30px;  
`;

const List= styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem= styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #30a1c9;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



function Footer() {
  return <Container>
    <Left>
      <Logo>MMP STYLE</Logo>
      <Desc>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quia voluptatum mollitia eum reiciendis alias beatae minima laboriosam odio soluta voluptatem, debitis iusto maxime assumenda sint rem id necessitatibus asperiores.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Shopping Cart</ListItem>
        <ListItem>Women</ListItem>
        <ListItem>Men</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Sales</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem> <Room style={{marginRight: "10px"}}/> 123 Main St, New York 70237</ContactItem>
      <ContactItem><Phone style={{marginRight: "10px"}} /> +1 708 123 5678</ContactItem>
      <ContactItem><MailOutline style={{marginRight: "10px"}} /> contact@mmpstyle.dev</ContactItem>
      <ContactItem><CreditCard style={{marginRight: "10px"}}/> Payment</ContactItem>
    </Right>
  </Container>;
}

export default Footer;
