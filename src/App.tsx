import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom">hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Primary
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          small
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          small danger
        </Button>
        <Button btnType={ButtonType.Link} href="httpsL://www.google.com">
          Google
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
