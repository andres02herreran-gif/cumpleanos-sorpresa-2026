import { useState } from "react";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [regaloSeleccionado, setRegaloSeleccionado] = useState<number>(-1);

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
        textAlign: "center",
      }}
    >
      {etapa === 0 && (
        <div>
          <h1>🎉 Feliz Cumpleaños 🎉</h1>

          <p>
            Hoy celebramos tu vida y todos los momentos hermosos que hemos
            compartido 💖
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <img src="https://picsum.photos/200" alt="foto1" />
            <img src="https://picsum.photos/201" alt="foto2" />
            <img src="https://picsum.photos/202" alt="foto3" />
            <img src="https://picsum.photos/203" alt="foto4" />
          </div>

          <button
            onClick={() => setEtapa(1)}
            style={{ marginTop: "20px", padding: "10px 15px" }}
          >
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

          {regalos.map((regalo, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setRegaloSeleccionado(index);
                  setEtapa(3);
                }}
                style={{ margin: "5px", padding: "10px" }}
              >
                Opción {index + 1}
              </button>
            </div>
          ))}
        </div>
      )}

      {etapa === 3 && (
        <div>
          <h2>🎉 ¡Elegiste! 🎉</h2>

          <p>
            Tu elección fue:{" "}
            <strong>
              {regalos[regaloSeleccionado] || "Regalo desconocido"}
            </strong>
          </p>

          <h3>Pero mira todas las opciones 👀</h3>

          <ul style={{ textAlign: "left" }}>
            {regalos.map((regalo, index) => (
              <li key={index}>🎁 {regalo}</li>
            ))}
          </ul>

          <button
            onClick={() => {
              setEtapa(0);
              setRegaloSeleccionado(-1);
            }}
            style={{ marginTop: "15px" }}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}