import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};

    if (!correo.includes("@")) {
      nuevosErrores.correo = "El correo debe tener un formato válido.";
    }

    if (contraseña.length < 8) {
      nuevosErrores.contraseña = "La contraseña debe tener al menos 8 caracteres.";
    }

    setErrores(nuevosErrores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validar();
    if (Object.keys(errores).length === 0) {
      alert("Formulario enviado con éxito");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Formulario en React</h1>
      <form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo:</label>
          <input
            type="email"
            className={`form-control ${errores.correo ? "is-invalid" : ""}`}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            onBlur={validar}
          />
          {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className={`form-control ${errores.contraseña ? "is-invalid" : ""}`}
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            onBlur={validar}
          />
          {errores.contraseña && (
            <div className="invalid-feedback">{errores.contraseña}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
