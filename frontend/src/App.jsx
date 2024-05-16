import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios("http://localhost:8080").then((result) => console.table(result));
  }, []);

  return <p>Hi!</p>;
};

export default App;
