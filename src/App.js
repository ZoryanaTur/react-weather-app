import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://idyllic-unicorn-26008a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Zoryana Tur
          </a>{" "}
          {""}
          and {""}{" "}
          <a
            href="https://github.com/ZoryanaTur/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
