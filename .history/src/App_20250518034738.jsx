// App.jsx
import logo from './logo.svg';
import './App.css';
import UploadPage from './UploadPage';
import ResultPage from './ResultPage';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      {!result ? (
        <UploadPage onResult={setResult} />
      ) : (
        <ResultPage result={result} goBack={() => setResult(null)} />
      )}
    </div>
  );
}

export default App;
