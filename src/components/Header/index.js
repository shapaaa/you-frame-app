
import styled from 'styled-components';
const Container = styled.div`
background-color:var(--dark-blue);
display:flex;
align-items:center;
height:clamp(50px,10vw,100px);
`;
const Title = styled.h4`
 font-size:clamp(20px,3vw,40px);
 line-height:1.3;
color:var(--lightest-blue);
margin:0 auto;
font-family:'Verdana';
`;
function Header() {
  return (
    <Container>
             <Title>Gallery</Title>
    </Container>
  );
}

export default Header;
