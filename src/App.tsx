import { useState } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [regaloSeleccionado, setRegaloSeleccionado] = useState(null);

  const regalos = [
    "Viaje sorpresa ✈️",
    "Cena especial 🍽️",
    "Regalo sorpresa 🎁",
    "Día de spa 💆",
    "Aventura juntos 🚀",
  ];

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      {etapa === 0 && (
        <div>
          <h1>🎉 Feliz Cumpleaños 🎉</h1>
          <p>
            Hoy celebramos tu vida y todos los momentos hermosos que hemos
            compartido 💖
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <img src="https://picsum.photos/200" />
            <img src="https://picsum.photos/201" />
            <img src="https://picsum.photos/202" />
            <img src="https://picsum.photos/203" />
          </div>

          <button onClick={() => setEtapa(1)} style={{ marginTop: "20px" }}>
            Ver sorpresa 🎁
          </button>
        </div>
      )}

      {etapa === 1 && (
        <div>
          <h2>¿Quieres elegir un regalo?</h2>
          <button onClick={() => setEtapa(2)}>Sí</button>
          <button onClick={() => setEtapa(0)} style={{ marginLeft: "10px" }}>
            Volver
          </button>
        </div>
      )}

      {etapa === 2 && (
        <div>
          <h2>Elige una opción 👇</h2>
          {regalos.map((r, i) => (
            <div key={i}>
              <button
                onClick={() => {
                  setRegaloSeleccionado(i);
                  setEtapa(3);
                }}
              >
                Opción {i + 1}
              </button>
            </div>
          ))}
        </div>
      )}

      {etapa === 3 && (
        <div>
          <h2>🎉 ¡Elegiste! 🎉</h2>
          <p>
            Tu elección fue: <strong>{regalos[regaloSeleccionado]}</strong>
          </p>

          <h3>Pero mira todas las opciones 👀</h3>
          <ul>
            {regalos.map((r, i) => (
              <li key={i}>🎁 {r}</li>
            ))}
          </ul>

          <button onClick={() => setEtapa(0)}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}