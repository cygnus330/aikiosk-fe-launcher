// ResultPage.jsx
import React from "react";

function ResultPage({ result, goBack }) {
  return (
    <div>
      <h1 className="text-xl font-bold">Analysis Result</h1>
      <pre className="mt-2">{JSON.stringify(result, null, 2)}</pre>
      <button onClick={goBack} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
        Back
      </button>
    </div>
  );
}

export default ResultPage;
