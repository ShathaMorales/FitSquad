import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
      user:'64a4c5a961b8bfa4c3e42fcd',
    });
  };

  useEffect(() => {
    if (props.us) {
      setTitle(props.us.title);
      setUrl(props.us.Url);
      setDescription(props.us.description);
      
    }
  }, [props.us]);

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="row">
        <div className="col-5 m-5">
          <div className="form-group">
            <label htmlFor="title">Training name</label>
            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Url">Image url</label>
            <input type="text" className="form-control" id="imgUrl" value={Url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" id="desc" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 ">{props.formAction}</button>
      </form>
      <p>{props.errors}</p>
    </div>
  );
};

export default Form;
