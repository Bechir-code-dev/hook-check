import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactStars from 'react-stars';


const Filter = ({setTitle,setRating}) => {
    const ratingChanged = (newRating) => {
        setRating(newRating)
      }
   return (
    <div className="inp">
    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Movie title
        </InputGroup.Text>
        <Form.Control
          className="input"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        Movie title
        </InputGroup.Text>
        <ReactStars
  count={5}
  onChange={ratingChanged}
  size={40}
  color2={'#ffd700'}
  half={true}
  edit = {true} />
     </InputGroup>

    </div>
   )
}
export default Filter;





/* <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Movie Rate
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e)=>setRating(e.target.value)}
        />
      </InputGroup> */