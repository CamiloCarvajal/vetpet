import React, { useState } from "react";
import Modal from "react-modal";

function App() {
  const [pet, setpet] = useState("");
  const [pets, setpets] = useState([]);
  const [editMode, seteditMode] = useState({ status: 1, action: "edit" });
  const [modalupsert, setmodalupsert] = useState("");
  //  const [modalIsOpen, setmodalIsOpen] = useState(true)

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-content">
          <Modal isOpen={editMode.status}>
            <div className="col-8">
              <h2>
                {editMode.action == "status"
                  ? "Registrar"
                  : "Actualiza tus datos"}
              </h2>
              <br></br>

              <form>
                <div>
                  <h5>Mascota</h5>
                  <hr></hr>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tipo"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Raza"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Fecha"
                  ></input>
                </div>
                <br></br>
                <div>
                  <h5>Dueno</h5>
                  <hr></hr>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Telefono"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Direccion"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                  ></input>
                </div>
              </form>
              <button className="btn btn-primary">Save</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
