import { useState } from "react";

export default function App() {
  const [codigo, setCodigo] = useState("");
  const [acceso, setAcceso] = useState(false);
  const [etapa, setEtapa] = useState(0);
  const [regalo, setRegalo] = useState(-1);

  const codigoSecreto = "02082026"; // 👉 cámbialo aquí

  const opciones = [
    "Viaje sorpresa ✈️",
    "Cena especial 🍽️",
    "Regalo sorpresa 🎁",
    "Día de spa 💆",
    "Aventura juntos 🚗"
  ];

  const botonStyle = {
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer"
  };

  // 🔐 PANTALLA DE ACCESO
  if (!acceso) {
    return (
      <div style={{
        textAlign: "center",
        padding: "50px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "white"
      }}>
        <h1>🔐 Acceso Secreto 🔐</h1>

        <p>Ingresa la palabra mágica 💖</p>

        <input
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código secreto..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            marginBottom: "10px"
          }}
        />

        <br />

        <button
          style={botonStyle}
          onClick={() => {
            if (codigo.toLowerCase() === codigoSecreto) {
              setAcceso(true);
            } else {
              alert("💔 Código incorrecto...");
            }
          }}
        >
          Entrar
        </button>
      </div>
    );
  }

  // 🎉 CARTA
  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      fontFamily: "Arial"
    }}>
      <h1>🎉 Feliz Cumpleaños 🎉</h1>

      {etapa === 0 && (
        <>
          <p>
            Hoy celebramos una persona increíble… 🌟  
            Gracias por existir, por cada sonrisa y cada momento.  
            Este es solo un pequeño detalle para recordarte lo especial que eres 💖
          </p>

          <div style={{ margin: "20px" }}>
            <img src="https://picsum.photos/200" style={{ margin: "5px", borderRadius: "10px" }} />
            <img src="https://picsum.photos/201" style={{ margin: "5px", borderRadius: "10px" }} />
          </div>

          <button style={botonStyle} onClick={() => setEtapa(1)}>
            Ver sorpresa 🎁
          </button>
        </>
      )}

      {etapa === 1 && (
        <>
          <h2>¿Quieres descubrir tu regalo? 🎁</h2>
          <button style={botonStyle} onClick={() => setEtapa(2)}>Sí 💖</button>
        </>
      )}

      {etapa === 2 && (
        <>
          <h2>Elige una opción 👇</h2>

          {opciones.map((o, i) => (
            <div key={i}>
              <button
                style={botonStyle}
                onClick={() => {
                  setRegalo(i);
                  setEtapa(3);
                }}
              >
                Opción {i + 1}
              </button>
            </div>
          ))}
        </>
      )}

      {etapa === 3 && (
        <>
          <h2 style={{ color: "#ff4d6d" }}>🎉 ¡Elegiste! 🎉</h2>

          <p style={{ fontSize: "20px" }}>
            Tu regalo es: <strong>{opciones[regalo]}</strong>
          </p>

          <h3>Pero estas eran todas 👀</h3>

          <ul style={{ textAlign: "left", maxWidth: "300px", margin: "auto" }}>
            {opciones.map((o, i) => (
              <li key={i}>🎁 {o}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: "20px", color: "#ff4d6d" }}>
            💖 Pero el mejor regalo... eres tú 💖
          </h2>
        </>
      )}
    </div>
  );
}
