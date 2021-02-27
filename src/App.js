import React, { useState } from "react";
import Modal from "react-modal";
import { isEmpty, size } from "lodash";
import {
  addDocument,
  deleteDocument,
  getCollection,
  updateDocument,
} from "./actions";

Modal.setAppElement("#root");

function App() {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    race: "",
    date: "",
    ownerName: "",
    ownerPhone: "",
    ownerAddress: "",
    ownerEmail: "",
  });
  const [pets, setpets] = useState([]);
  const [editMode, seteditMode] = useState({ status: true, action: "create" });
  const [modalupsert, setmodalupsert] = useState("");
  const [processResult, setProcessResult] = useState({
    status: 0,
    message: "",
  });
  // const [, setError] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "30%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#F8F8F8",
    },
  };

  const validateForm = () => {
    let isValid = Object.values(pet).filter((item) => isEmpty(item));
    return size(isValid) == 0;
  };

  const createPet = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setProcessResult({ status: -1, message: "Complete todos los campos" });
      return;
    }

    const result = await addDocument("pets", pet);
    if (!result.statusResponse) {
      setProcessResult({ status: -1, message: result.error });
      return;
    }

    setProcessResult({ status: 1, message: "" });
  };

  const editPet = () => {};

  return (
    <div className="container container-fluid">
      <div className="modal">
        <div className="modal-content">
          <Modal isOpen={editMode.status} style={customStyles}>
            <div className="col-12">
              <h2>
                {editMode.action == "status"
                  ? "Registrar"
                  : "Actualización de datos"}
              </h2>
              <br></br>

              <form
                onSubmit={editMode.action == "create" ? createPet : editPet}
              >
                <div>
                  <h5>Mascota</h5>
                  <hr></hr>
                  <input
                    type="text"
                    className="form-control mb-2 "
                    placeholder="Nombre"
                    onChange={(name) =>
                      setPet({ ...pet, name: name.target.value })
                    }
                    value={pet.name}
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tipo"
                    onChange={(type) =>
                      setPet({ ...pet, type: type.target.value })
                    }
                    value={pet.type}
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Raza"
                    onChange={(race) =>
                      setPet({ ...pet, race: race.target.value })
                    }
                    value={pet.race}
                  ></input>
                  <input
                    type="date"
                    className="form-control mb-2"
                    placeholder="Fecha de nacimiento"
                    onChange={(date) =>
                      setPet({ ...pet, date: date.target.value })
                    }
                    value={pet.date}
                  ></input>
                </div>
                <br></br>
                <div>
                  <h5>Dueño</h5>
                  <hr></hr>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre"
                    onChange={(ownerName) =>
                      setPet({ ...pet, ownerName: ownerName.target.value })
                    }
                    value={pet.ownerName}
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Teléfono"
                    onChange={(phone) =>
                      setPet({ ...pet, ownerPhone: phone.target.value })
                    }
                    value={pet.ownerPhone}
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Dirección"
                    onChange={(address) =>
                      setPet({ ...pet, ownerAddress: address.target.value })
                    }
                    value={pet.ownerAddress}
                  ></input>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Correo electrónico"
                    onChange={(email) =>
                      setPet({ ...pet, ownerEmail: email.target.value })
                    }
                    value={pet.ownerEmail}
                  ></input>
                </div>
                <div
                  className={(() => {
                    if (processResult.status == 1) {
                      return "alert alert-success text-center";
                    } else if (processResult.status == -1) {
                      return "alert alert-danger text-center";
                    } else {
                      return "";
                    }
                  })()}
                >
                  <span>
                    {processResult.status != 0 && processResult.message}
                  </span>
                </div>
                <button className="btn btn-primary mx-2" type="submit">
                  Guardar
                </button>
                <button className="btn btn-secondary">Cancelar</button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
