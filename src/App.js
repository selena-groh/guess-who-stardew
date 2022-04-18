import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Guess Who, Stardew?</h1>
      <p className="App-subtitle">
        A Guess Who remake, but with Stardew Valley characters!
      </p>
      <Game />
      <small>
        *
        <a
          href="https://www.stardewvalley.net/"
          target="_blank"
          rel="noreferrer"
        >
          Stardew Valley
        </a>{" "}
        was created by Concerned Ape and Guess Who is owned by Hasbro. This game
        is not official; it's just for fun!
      </small>
    </div>
  );
}

export default App;
