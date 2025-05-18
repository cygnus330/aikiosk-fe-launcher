// App.jsx
import React, { useState } from "react";
import UploadPage from './UploadPage';
import ResultPage from './ResultPage';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      {!result ? (
        <UploadPage onResult={setResult} />
      ) : (
        <ResultPage result={result} />
      )}
    </div>
  );
}

export default App;
