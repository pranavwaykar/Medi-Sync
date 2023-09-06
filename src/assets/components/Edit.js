import React, { useState, useNavigate } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Edit({
  item,
  Patients,
  setPatients,
  index,
  handleEdit,
  handleDelete,
  show,
  handleClose,
}) {
  const [update, setUpdate] = useState(Patients);
  console.log("main update", update);

  function handleInput(e) {
    e.preventDefault();

    const newlist = Patients.map((list) =>
      list.id === item.id ? { ...list, [e.target.name]: e.target.value } : list
    );
    console.log("newlist", newlist);

    setUpdate(newlist);
  }

  function handlesave(e) {
    e.preventDefault();
    setPatients(update);
    console.log("update", update);
  }

  return (
    <>
      {/* tr start*/}
      <tr id="data">
        <td>{index + 1}</td>
        <td>{item.Name}</td>
        <td>{item.Contact}</td>
        <td>{item.Room}</td>
        <td>{item.Bill}</td>
        <td>
          <Button
            onClick={(e) => handleEdit(e, item.id)}
            style={{
              color: "#FFFFFF",
              backgroundColor: "#457",
            }}
          >
            Edit
          </Button>
          &nbsp;
          <Button
            onClick={() => handleDelete(item.id)}
            style={{
              color: "#FFFFFF",
              backgroundColor: "#3E3A3A",
            }}
          >
            Delete
          </Button>
        </td>
      </tr>

      {/* Edit Modal Starts */}

      <Modal show={show}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#ffffff", display: "flex" }}
          onClick={handleClose}
        >
          <Modal.Title style={{ display: "flex", justifyContent: "center" }}>
            Edit Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesave}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required="required"
                type="text"
                name="Name"
                defaultValue={item.Name}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                required
                type="text"
                name="Contact"
                defaultValue={item.Contact}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room</Form.Label>
              <Form.Control
                required
                type="number"
                name="Room"
                defaultValue={item.Room}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bill</Form.Label>
              <Form.Control
                required
                type="number"
                name="Bill"
                defaultValue={item.Bill}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group class="d-flex justify-content-center">
              <Button
                class="btn btn-success gap-2"
                style={{ backgroundColor: "#3E3A3A" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              &nbsp;
              <Button
                type="submit"
                style={{ backgroundColor: "#457" }}
                onClick={handleClose}
              >
                Save
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Edit;
