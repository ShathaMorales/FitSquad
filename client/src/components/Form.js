import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const FormContainer = styled.div`
display: grid;
grid-template-columns: 1fr minmax(200px, 400px) 1fr;
grid-template-rows: 1fr minmax(auto, 1fr) 1fr;
grid-gap: 10px;
width: 100%;
height: 100vh;
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
// animation: Gradient 15s ease infinite;
box-sizing: border-box;
`;

const StyledForm = styled.form`
grid-column: 2;
grid-row: 2;
display: grid;
grid-gap: 10px;
margin: auto 0;
padding: 20px;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 10px;
box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
padding: 5px;
margin: 10px;
border: 1px solid #ddd;
border-radius: 5px;
&:hover {
    border: 1px solid #aaf;
}
`;

const StyledButton = styled.button`
padding: 10px;
border: 1px solid rgba(0, 0, 0, 0);
border-radius: 5px;
background: #fff;
width: 330px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

&:hover {
    background-color: #eef;
    border: 1px solid #aaf;
}
`;

const Form = (props) => {

  const [title, setTitle] = React.useState('');
  const [Url, setUrl] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.formSubmitted({
      title,
      Url,
      description,
      user: '64a4c5a961b8bfa4c3e42fcd',
    })
  }

  useEffect(() => {
    if (props.us) {
      setTitle(props.us.title);
      setUrl(props.us.Url);
      setDescription(props.us.description);
    }
  }, [props.us]);

  return (
    <FormContainer >
      <StyledForm onSubmit={onSubmitHandler} className="row">
        <div>
          <label htmlFor="title">Excersise Name</label>
          <StyledInput type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <div>
            <label htmlFor="Url">Image url</label>
            <StyledInput type="text" className="form-control" id="imgUrl" value={Url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <StyledInput className="form-control" id="desc" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></StyledInput>
          </div>
        </div>
        <StyledButton type="submit" className="">{props.formAction}</StyledButton>
      </StyledForm>
      <p>{props.errors}</p>
    </FormContainer>
  )
}

export default Form;