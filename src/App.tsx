import { useState, useEffect } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [regalo, setRegalo] = useState(-1);
  const [showConfeti, setShowConfeti] = useState(false);

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

  // 🎆 Activar efectos al final
  useEffect(() => {
    if (etapa === 3) {
      setShowConfeti(true);
      setTimeout(() => setShowConfeti(false), 5000);
    }
  }, [etapa]);

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      fontFamily: "Arial",
      overflow: "hidden"
    }}>
      <h1>🎉 Feliz Cumpleaños 🎉</h1>

      {/* 🎉 CONFETI + ✨ FUEGOS */}
      {showConfeti && (
        <>
          {/* Confeti */}
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none"
          }}>
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={"confeti" + i}
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: Math.random() * 100 + "%",
                  width: "8px",
                  height: "8px",
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  animation: `fall ${Math.random() * 3 + 2}s linear infinite`
                }}
              />
            ))}
          </div>

          {/* Fuegos artificiales */}
          <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            pointerEvents: "none"
          }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={"fire" + i}
                style={{
                  position: "absolute",
                  top: Math.random() * 80 + "%",
                  left: Math.random() * 90 + "%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  animation: `explode 1s ease-out forwards`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Animaciones */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0px); }
            100% { transform: translateY(100vh); }
          }

          @keyframes explode {
            0% {
              transform: scale(0.5);
              opacity: 1;
            }
            100% {
              transform: scale(3);
              opacity: 0;
            }
          }
        `}
      </style>

      {etapa === 0 && (
        <>
          <p style={{ fontSize: "18px" }}>
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

          <h3>Pero en realidad... 👀</h3>

          <p style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#ff4d6d",
            marginTop: "20px"
          }}>
            💖 El mejor regalo es compartir tiempo contigo 💖
          </p>

          <ul style={{ textAlign: "left", maxWidth: "300px", margin: "auto" }}>
            {opciones.map((o, i) => (
              <li key={i}>🎁 {o}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: "25px" }}>
            🎆 Feliz cumpleaños 🎆
          </h2>
        </>
      )}
    </div>
  );
}
