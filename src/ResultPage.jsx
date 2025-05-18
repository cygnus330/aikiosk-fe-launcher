// ResultPage.jsx
import React from "react";

function ResultPage({ result }) {
  const redir = (u) => {
    window.location.href = u;
  };

  let parsedResult = result;
  if (typeof result === "string") {
    try {
      parsedResult = JSON.parse(result);
    } catch (e) {
      parsedResult = {};
    }
  }

  const age = parsedResult.age ?? "25";
  const height = parsedResult.height ?? "170";
  const gender = parsedResult.gender ?? "m";
  const right_arm = parsedResult.right_arm ?? "s";
  const left_arm = parsedResult.left_arm ?? "s";

  const r_int = right_arm == "i" ? 1 : 0;
  const l_int = left_arm == "i" ? 1 : 0;

  const x = (r_int && !l_int) ? 20 : 0;
  const y = (parseInt(height) <= 150) ? 50 : 0;

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
          redir(`http://localhost:5173/eatheregkrh?x=${x}&y=${y}`)
        }
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        load kiosk
      </button>
    </div>
  );
}

export default ResultPage;
