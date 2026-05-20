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

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎉 Feliz Cumpleaños 🎉</h1>

      {etapa === 0 && (
        <>
          <p>Hoy celebramos tu vida 💖</p>

          <img src="https://picsum.photos/200" />
          <img src="https://picsum.photos/201" />

          <br /><br />

          <button onClick={() => setEtapa(1)}>
            Ver sorpresa 🎁
          </button>
        </>
      )}

      {etapa === 1 && (
        <>
          <h2>¿Quieres un regalo?</h2>
          <button onClick={() => setEtapa(2)}>Sí</button>
        </>
      )}

      {etapa === 2 && (
        <>
          <h2>Elige una opción 👇</h2>

          {opciones.map((o, i) => (
            <div key={i}>
              <button onClick={() => {
                setRegalo(i);
                setEtapa(3);
              }}>
                Opción {i + 1}
              </button>
            </div>
          ))}
        </>
      )}

      {etapa === 3 && (
        <>
          <h2>🎉 ¡Elegiste! 🎉</h2>
          <p>{opciones[regalo]}</p>

          <h3>Pero todas eran 👀</h3>
          <ul>
            {opciones.map((o, i) => (
              <li key={i}>🎁 {o}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
