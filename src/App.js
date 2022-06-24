import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
        <main>
          {" "}
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by Eu and is{" "}
            <a
              href="https://github.com/ibads8/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/genuine-pixie-8e22b3/overview"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
