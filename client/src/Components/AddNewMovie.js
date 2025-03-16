import React, { useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddNewMovie = ({addmovie}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addingTheMovie = ({e}) =>{
    const newmovie = {title,description,posterURL,rating};
    addmovie(newmovie);
    setTitle();
    setDescription();
    setPosterURL();
    setRating(0);
    closeModal();
  }

  return (
    <>
      <div className="add-movie-form">
        <button  onClick={openModal}>Add new Movie</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Movie</h2>

          <h4>What is Your Movie</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Movie"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>PosterURL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your PosterURL"
                onChange={(e) => setPosterURL(e.target.value)}
                value={posterURL}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your rate"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e)=>{e.preventDefault(e) ; addingTheMovie(e)}}>
              Submit
            </Button>
            <Button className="buttonD" variant="danger" onClick={closeModal}>
              close
            </Button>
          </Form>
        </Modal>
      </div>
    </>
  );
};
export default AddNewMovie;
