import { ThemeProvider } from "./context/ThemeContext";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
export default App;
