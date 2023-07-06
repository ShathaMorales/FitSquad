import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;


// const FormContainer = styled.div`
// display: grid;
// grid-template-columns: 1fr minmax(200px, 400px) 1fr;
// grid-template-rows: 1fr minmax(auto, 1fr) 1fr;
// grid-gap: 10px;
// width: 100%;
// height: 100vh;
// background-image:"https://ik.imagekit.io/shadid/young-beautiful-woman-bright-sportwear-isolated-gradient-pink-blue-background-neon-light.jpg?updatedAt=1688593548828"
// // background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
// background-size: 400% 400%;
// // animation: Gradient 15s ease infinite;
// box-sizing: border-box;
// `;

const StyledForm = styled.form`
grid-column: 2;
grid-row: 2;
display: grid;
grid-gap: 10px;
margin: auto 0;
padding: 20px;
margin-right: 350px;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 10px;
box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
margin:0 auto;
padding: 5px;
margin-bottom: 10px;
border: 1px solid #ddd;
border-radius: 5px;
&:hover {
    border: 1px solid #aaf;
}
`;

const StyledButton = styled.button`
margin:0 auto;
margin-top:40px;
margin-bottom:15px;
padding: 7px;
border: 1px solid rgba(0, 0, 0, 0);
border-radius: 5px;
background: #fff;
width: 330px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

&:hover {
    background-color: #56d0f0;
    border: 1px solid #aaf;
}
`;

const Form = (props) => {
  const { pic } = props;
  const { user } = props;
  const [title, setTitle] = React.useState('');
  const [Url, setUrl] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [day, setDay] = React.useState('');
  const { isUpdate } = props;
  const { id } = useParams()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.formSubmitted({
      title,
      Url,
      description,
      user: user._id,
      day: day.valueو

    })
  }
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    if (props.post) {
      setTitle(props.post.title);
      setUrl(props.post.Url);
      setDescription(props.post.description);
    }
  }, [props.post]);



  return (
    <FormContainer style={{ backgroundImage: `url(${pic})` }}>
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
          <div>
            <label htmlFor="desc">Day of the Week</label>
            <Select
              id="area"
              value={day}
              onChange={(selectedOption) => {
                setDay(selectedOption);
              }}
              options={days.map((day) => {
                return { value: day, label: day };
              })}
            />
          </div>
        </div>
        {isUpdate ? <DeleteButton id={id} /> : ""}
        <StyledButton type="submit" className="">{props.formAction}</StyledButton>
      </StyledForm>
      <p>{props.errors}</p>
    </FormContainer>
  )
}

export default Form;