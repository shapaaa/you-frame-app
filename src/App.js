
import styled from 'styled-components';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index'
const Container = styled.div`
min-height:100vh;
display:grid;
background-color:var(--lightest-blue);
grid-template-rows: auto 1fr auto;
grid-template-columns: 100%;
`;
function App() {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
