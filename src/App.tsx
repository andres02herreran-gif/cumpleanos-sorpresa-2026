import { useState } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [regalo, setRegalo] = useState(-1);

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
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      fontFamily: "Arial"
    }}>

      <div className="fade">

        <h1>🎉 Feliz Cumpleaños 🎉</h1>

        {etapa === 0 && (
          <>
            <p style={{ fontSize: "18px" }}>
              Hoy celebramos una persona increíble… 🌟  
              Gracias por existir y por cada momento compartido 💖
            </p>

            <img src="https://picsum.photos/200" />
            <img src="https://picsum.photos/201" />

            <br /><br />

            <button style={botonStyle} onClick={() => setEtapa(1)}>
              Ver sorpresa 🎁
            </button>
          </>
        )}

        {etapa === 1 && (
          <>
            <h2>¿Quieres descubrir tu regalo? 🎁</h2>
            <button style={botonStyle} onClick={() => setEtapa(2)}>
              Sí 💖
            </button>
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
            <h2 style={{ color: "#ff4d6d" }}>🎉 ¡Sorpresa! 🎉</h2>

            <p style={{ fontSize: "20px" }}>
              Elegiste: <strong>{opciones[regalo]}</strong>
            </p>

            <p style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#ff4d6d",
              marginTop: "20px"
            }}>
              💖 El mejor regalo es compartir tiempo contigo 💖
            </p>

            <p style={{ marginTop: "10px" }}>
              Y lo mejor… apenas comienza 😏✨
            </p>

            <h2 style={{ marginTop: "25px" }}>
              🎉 Feliz cumpleaños 🎉
            </h2>
          </>
        )}

      </div>

      {/* TRANSICIÓN SUAVE */}
      <style>{`
        .fade {
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
