import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Add = ({ setPatients }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    const Name = e.target.name.value;
    const Contact = e.target.contact.value;
    const Room = e.target.room.value;
    const Bill = e.target.bill.value;

    const Adddata = { id: uuid(), Name, Contact, Room, Bill };
    console.log(Adddata);

    setShow(false);

    e.preventDefault();


    setPatients((list) => {
      return list.concat(Adddata);
    });
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          color: "#FFFFFF",
          backgroundColor: "#457",
          marginBottom: "1rem",
        }}
      >
        Add Patient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-grid gap-2" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlid="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formContact">
              <Form.Control
                type="number"
                placeholder="Enter Contact"
                required
                name="contact"
                // onChange={(e) => setContact(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formRoom">
              <Form.Control
                type="number"
                name="room"
                placeholder="Enter Room"
                required
                // onChange={(e) => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formBill">
              <Form.Control
                type="number"
                name="bill"
                placeholder="Enter Bill"
                required
                // onChange={(e) => setBill(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              // onClick={(e) => handleSubmit(e)}
              // onClick={handleClose}
              type="submit"
              style={{ color: "#FFFFFF", backgroundColor: "#457" }}
            >
              Submit
            </Button>
            <Button
              style={{ color: "#FFFFFF", backgroundColor: "#3E3A3A" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Add;
