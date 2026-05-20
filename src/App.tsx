import { useState, useEffect } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [regalo, setRegalo] = useState(-1);
  const [finalNetflix, setFinalNetflix] = useState(false);

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

  useEffect(() => {
    if (etapa === 3) {
      setTimeout(() => setFinalNetflix(true), 5000);
    }
  }, [etapa]);

  // 🎬 FINAL NETFLIX
  if (finalNetflix) {
    return (
      <div className="fade">
        <div style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "40px" }}>🎬 FIN 🎬</h1>

          <h2 style={{ fontSize: "28px", marginTop: "20px" }}>
            Esta historia apenas comienza... 💖
          </h2>

          <p style={{ marginTop: "20px", color: "#ff4d6d" }}>
            Porque lo mejor es vivirla contigo ✨
          </p>
        </div>

        <style>{`
          .fade {
            animation: fadeIn 1.5s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

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
            <p>
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

            <p>
              Elegiste: <strong>{opciones[regalo]}</strong>
            </p>

            <p style={{ marginTop: "20px", fontWeight: "bold" }}>
              💖 El mejor regalo es compartir tiempo contigo 💖
            </p>
          </>
        )}
      </div>

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
