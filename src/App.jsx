import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResultProvider from "./store/Result";
import FormOp from "./components/FormOp";

function App() {
  return (
    <ResultProvider>
      <FormOp />
    </ResultProvider>
  );
}

export default App;
