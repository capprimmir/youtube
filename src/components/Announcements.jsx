import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`

const Announcements = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Order Over $20
    </Container>
  )
}

export default Announcements
