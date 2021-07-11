import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify";

function App() {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const token = hash.access_token;

    console.log("I have a token ---> ", token);
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
