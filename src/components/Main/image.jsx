
import styled from 'styled-components';

const Container = styled.div`
height:clamp(150px,30vw,250px);
margin-bottom:20px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
&:hover{
     box-shadow: 0 0 10px rgba(0,0,0,0.2);
     /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2); */
}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:5px 5px 0 0;
`;
const Label = styled.div`
color:var(--light-blue);
font-size:2rem;
height:fit-content;
text-align:center;
font-family:'Verdana';
margin-top:-2px;
border-radius:0 0 5px 5px;
padding:10px 0px;
background-color:white;
`;
function App(props) {
    const {src,no} = props;
  return (
    <Container>
       <Image src={src}/>
       <Label>
           Image {no}
        </Label>
    </Container>
  );
}

export default App;

