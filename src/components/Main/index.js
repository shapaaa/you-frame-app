import styled from 'styled-components';
import upload from '../../assets/icons/upload.svg';
import Images from './images';
import {imagesQuery} from './images'
import {gql, useMutation} from '@apollo/react-hooks'
const Container = styled.div`
padding-bottom:30px;
`;
const ImageUploader = styled.input`
`;
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:30px;
`;
const Label = styled.label`
cursor: pointer;
font-size:clamp(1.4rem, 2vw,18px);
font-weight:bold;
box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
letter-spacing:.5px;
font-family:'Verdana';
display:inline-block;
background: white url(${upload}) no-repeat 23px 40%;
padding:12px 15px 12px 50px;
background-size:18px 18px;
color:var(--dark-blue);
border-radius:4px;
border:none;
margin:5vw auto 0 auto;
border-bottom:3px solid var(--dark-blue);
`;
export const Loader = styled.div`
color:var(--dark-gray);
font-size:2rem;
text-align:center;
margin-top:50px;
`;

const uploadImageMuation = gql`
mutation UploadImage($file:Upload!)
{
  uploadImage(file:$file)
}
`;

function Main() {
  const [mutate,{loading,error}] = useMutation(uploadImageMuation,{
    refetchQueries:[{query:imagesQuery}]
  });
  const onChange = ({
    target: {validity,files: [file]}})=>{
         validity.valid && mutate({variables:{file}})
  };
  if(loading)
  {
  return (
  <Container>
  <Loader>Loading...</Loader>
  </Container>
  )
  }
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  return (
    <Container>
     <Form>
         <ImageUploader accept="image/*" onChange={onChange} id="actual-btn" type='file' hidden />
         <Label for='actual-btn'>Upload</Label>  
     </Form>
     <Images/>   
    </Container>
  );
}

export default Main;
