import styled from 'styled-components';
const Container = styled.div`
background-color:var(--dark-blue);
text-align:center;
font-family:'Verdana';
font-size:clamp(2rem,2vw,2.4rem);
color:white;
padding:10px 10px; 
`;
function App() {
  return (
    <Container>
      FullStack Challenge - 2020
    </Container>
  );
}

export default App;
