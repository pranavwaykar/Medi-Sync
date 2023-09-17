import React, { useState, Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./Add";
import Edit from "./Edit";
import "../styles/Dashboard.css";
import data from "../db/Patients.json";

function Patients() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [Patients, setPatients] = useState(data);
  console.log(Patients);

  let history = useNavigate();

  const [editid, setEditid] = useState(0);

  const handleEdit = (e, id) => {
    e.preventDefault();

    setShow(true);
    setEditid(id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this record?") === true) {
      var index = Patients.map(function (e) {
        return e.id;
      }).indexOf(id);

      Patients.splice(index, 1);
      alert("Record Deleted Successfully!!");
    } else {
    }
    history("/");
  };

  return (
    <Fragment>
      {/* Table Content Starts */}

      <section  className="hero-section " id="Patient-list">
        <div id="patients-section" class="container-fluid ">
          <div className="text-center">
            <div>
              <h1 id="contactus" className="display-3">
                Patients
              </h1>
              <hr className="w-25  mx-auto bg-dark" style={{ height: "3px" }} />
            </div>

            <Add setPatients={setPatients} />

            {/* Table Starts */}

            <div style={{ overflowX: "auto" }}>
              <Table class="row" striped bordered hover size="sm">
                <thead
                  class="col-md-2"
                  style={{ color: "#FFFFFF", backgroundColor: "#457" }}>
                  <tr id="heading">
                    <th>NO</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Room</th>
                    <th>Bill</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody
                  class="col-md-2"
                  style={{ color: "#000000", backgroundColor: "#ffffff" }}>
                  {Patients.map((item, index) =>
                    editid === item.id ? (
                      <Edit
                        show={show}
                        Patients={Patients}
                        item={item}
                        setPatients={setPatients}
                        index={index}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleClose={handleClose}
                      />
                    ) : (
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
                            }}>
                            Edit
                          </Button>
                          &nbsp;
                          <Button
                            onClick={() => handleDelete(item.id)}
                            style={{
                              color: "#FFFFFF",
                              backgroundColor: "#3E3A3A",
                            }}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
              <br></br>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Patients;
