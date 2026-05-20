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
    backgroundColor: "#f8a5c2",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    margin: "8px",
    cursor: "pointer",
    fontSize: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "30px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #fff1eb, #fcd5ce)",
      fontFamily: "'Segoe UI', 'Poppins', sans-serif",
      color: "#6d6875"
    }}>

      <div className="fade">

        <h1 style={{
          fontSize: "36px",
          color: "#b5838d",
          marginBottom: "20px"
        }}>
          🎉 Feliz Cumpleaños 🎉
        </h1>

        {etapa === 0 && (
          <>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "500px",
              margin: "auto"
            }}>
              Hoy celebramos a una persona muy especial… 🌸  
              Gracias por llenar todo de momentos bonitos, sonrisas y recuerdos únicos.  
              Este pequeño detalle es para recordarte lo increíble que eres 💖
            </p>

            <div style={{ marginTop: "25px" }}>
              <img src="https://picsum.photos/200" style={{ borderRadius: "15px", margin: "6px" }} />
              <img src="https://picsum.photos/201" style={{ borderRadius: "15px", margin: "6px" }} />
            </div>

            <button style={botonStyle} onClick={() => setEtapa(1)}>
              Ver sorpresa ✨
            </button>
          </>
        )}

        {etapa === 1 && (
          <>
            <h2 style={{ marginTop: "25px" }}>
              ¿Quieres descubrir tu regalo? 🎁
            </h2>

            <button style={botonStyle} onClick={() => setEtapa(2)}>
              Sí, claro 💖
            </button>
          </>
        )}

        {etapa === 2 && (
          <>
            <h2 style={{ marginTop: "25px" }}>
              Elige una opción 👇
            </h2>

            <div style={{ marginTop: "15px" }}>
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
            </div>
          </>
        )}

        {etapa === 3 && (
          <>
            <h2 style={{
              color: "#b5838d",
              marginTop: "25px"
            }}>
              ✨ Sorpresa ✨
            </h2>

            <p style={{
              fontSize: "18px",
              marginTop: "10px"
            }}>
              Elegiste: <strong>{opciones[regalo]}</strong>
            </p>

            <p style={{
              fontSize: "20px",
              marginTop: "20px",
              fontWeight: "600",
              color: "#9d8189"
            }}>
              Pero en realidad… 💫
            </p>

            <p style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginTop: "10px",
              color: "#b5838d"
            }}>
              💖 Todos los momentos contigo son el mejor regalo 💖
            </p>

            <p style={{
              marginTop: "15px",
              fontSize: "16px"
            }}>
              Y esto apenas comienza ✨
            </p>

            <h2 style={{
              marginTop: "30px",
              color: "#b5838d"
            }}>
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
