import { useState, useEffect, useRef } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [etapa, setEtapa] = useState(0);
  const [regalo, setRegalo] = useState(-1);
  const [showConfeti, setShowConfeti] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  // 🎬 Pantalla de entrada
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  // 🎉 Activar efectos finales
  useEffect(() => {
    if (etapa === 3) {
      setShowConfeti(true);
      audioRef.current?.play();
      setTimeout(() => setShowConfeti(false), 5000);
    }
  }, [etapa]);

  // 🎬 PANTALLA DE CARGA
  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "white"
      }}>
        <h1 style={{
          fontSize: "28px",
          animation: "fade 2s infinite"
        }}>
          🎁 Preparando tu sorpresa...
        </h1>

        <div style={{
          marginTop: "20px",
          width: "50px",
          height: "50px",
          border: "5px solid white",
          borderTop: "5px solid transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />

        <style>
          {`
            @keyframes spin {
              100% { transform: rotate(360deg); }
            }

            @keyframes fade {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
          `}
        </style>
      </div>
    );
  }

  // 🎉 CARTA PRINCIPAL
  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      fontFamily: "Arial",
      overflow: "hidden"
    }}>

      {/* 🎵 AUDIO */}
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/celebrations/fireworks.ogg" />

      {/* 🎉 CONFETI */}
      {showConfeti && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
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
      )}

      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0px); }
            100% { transform: translateY(100vh); }
          }
        `}
      </style>

      <h1>🎉 Feliz Cumpleaños 🎉</h1>

      {etapa === 0 && (
        <>
          <p style={{ fontSize: "18px" }}>
            Hoy celebramos una persona increíble… 🌟  
            Gracias por existir y por cada momento compartido 💖
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
