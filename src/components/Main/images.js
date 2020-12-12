
import styled from 'styled-components';
import Image from './image';
import { gql, useQuery } from '@apollo/react-hooks';
import { Loader } from './index';
const Container = styled.div`
display:grid;
width:90vw;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
@media screen and (min-width:500px)
{
grid-template-columns:repeat(auto-fit,minmax(370px,1fr));
width:85vw;
}
column-gap:20px;
row-gap:30px;
margin:0 auto;
`;
export const imagesQuery = gql`
  {
    files
  }
`;
function Images() {
  const {data,loading} = useQuery(imagesQuery);
  if(loading)
  return <Loader>loading...</Loader>
  return (
    <Container>
       {data.files.map((image,index)=>
           <Image  key={image} no={index+1} src={`http://localhost:4000/images/${image}`}/>
       )} 
    </Container>
  );
}

export default Images;
