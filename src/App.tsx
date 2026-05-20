import { useState } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [acepto, setAcepto] = useState<null | boolean>(null);
  const [regalo, setRegalo] = useState(-1);

  const opciones = [
    "Viaje sorpresa ✈️",
    "Cena especial 🍽️",
    "Regalo sorpresa 🎁",
    "Día de spa 💆",
    "Aventura juntos 🚗"
  ];

  const URL = "https://script.google.com/macros/s/AKfycby_yxCgYVuRu2iPg7VprE86yovYDoNp7JW3ZC56zeCuoLKNmerdvHxYeDeg50fs5O9I/exec";

  const botonSi = {
    backgroundColor: "#f8a5c2",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const botonNo = {
    backgroundColor: "#d8a5b3",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff1eb, #fcd5ce)",
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <h1 style={{ color: "#b5838d" }}>🎉 Feliz Cumpleaños 🎉</h1>

      {/* ETAPA 0 */}
      {etapa === 0 && (
        <>
          <p>Hoy tengo algo especial para ti 💖</p>

          <button style={botonSi} onClick={() => setEtapa(1)}>
            Ver sorpresa ✨
          </button>
        </>
      )}

      {/* ETAPA 1 */}
      {etapa === 1 && (
        <>
          <h2 style={{ marginTop: "20px" }}>
            ¿Quieres aceptar este regalo? 🎁
          </h2>

          {/* CONTENEDOR DE BOTONES */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px"
            }}
          >
            {/* BOTÓN SI */}
            <button
              style={botonSi}
              onClick={() => {
                fetch(URL, {
                  method: "POST",
                  body: JSON.stringify({ respuesta: "SI" })
                });

                setAcepto(true);
                setEtapa(2);
              }}
            >
              Sí 💖
            </button>

            {/* BOTÓN NO */}
            <button
              style={botonNo}
              onClick={() => {
                fetch(URL, {
                  method: "POST",
                  body: JSON.stringify({ respuesta: "NO" })
                });

                setAcepto(false);
                setEtapa(3);
              }}
            >
              No 😏
            </button>
          </div>
        </>
      )}

      {/* SI DIJO NO */}
      {etapa === 3 && (
        <>
          <h2>😏 Bueno...</h2>

          <p>Entonces me quedo con todos los regalos 😂</p>

          <button style={botonSi} onClick={() => setEtapa(2)}>
            Ok, quiero verlos 👀
          </button>
        </>
      )}

      {/* OPCIONES */}
      {etapa === 2 && (
        <>
          <h2>Elige una opción 👇</h2>

          {opciones.map((o, i) => (
            <div key={i}>
              <button
                style={{ ...botonSi, marginTop: "10px" }}
                onClick={() => {
                  setRegalo(i);
                  setEtapa(4);
                }}
              >
                Opción {i + 1}
              </button>
            </div>
          ))}
        </>
      )}

      {/* RESULTADO */}
      {etapa === 4 && (
        <>
          <h2>🎉 Sorpresa 🎉</h2>

          <p>
            Elegiste: <strong>{opciones[regalo]}</strong>
          </p>

          <p
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              color: "#b5838d"
            }}
          >
            💖 Todos los regalos son para ti 💖
          </p>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Decisión registrada: {acepto ? "SÍ ✅" : "NO ❌"}
          </p>
        </>
      )}
    </div>
  );
}
