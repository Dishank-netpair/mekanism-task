import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (values[index] !== null) return;

    const next = count + 1;
    setCount(next);
    setValues((prev) => prev.map((v, i) => (i === index ? next : v)));
  };

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: 8,
        }}
      >
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={value !== null}
            style={{
              width: 60,
              height: 60,
              fontSize: 24,
            }}
          >
            {value ?? ""}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setCount(0);
          setValues(Array(9).fill(null));
        }}
        style={{
          padding: "8px 16px",
          borderRadius: 8,
          border: "none",
          background: "#323727",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </section>
  );
}

export default App;
