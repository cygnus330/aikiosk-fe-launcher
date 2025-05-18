// ResultPage.jsx
import React from "react";

function ResultPage({ result }) {
  const redir = (u) => {
    window.location.href = u;
  };

  const age = result.age;
  const height = result.height;

  return (
    <div>
      <h1 className="text-xl font-bold">Analysis Result</h1>
      <pre className="mt-2">
        {typeof result === "string"
          ? result.replace(/\\n/g, "\n").replace(/\\t/g, "    ")
          : JSON.stringify(result, null, 2)}
      </pre>
      <button
        onClick={() =>
          redir(`http://localhost:5173/eatheregkrh?x=${age}&y=${height}`)
        }
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        load kiosk
      </button>
    </div>
  );
}

export default ResultPage;
