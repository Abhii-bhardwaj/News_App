import { useState } from "react";
import Navbar from "./Navbar";
import Newsboard from "./Newsboard";
// import WeatherApp from "./Weather App/Components/WeatherApp";

// import ToDoList from "./ToDoList"
function App() {

  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </>
  );
}

export default App;
