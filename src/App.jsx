import CharacterFilter from "./CharacterFilter/CharacterFilter";
import Gallery from "./Gallery/Gallery";
import "./main.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/characters">Filtrar Personajes</NavLink>
        </nav>
        <Routes>
          <Route path="/home" element={<Gallery />}></Route>
          <Route path="/characters" element={<CharacterFilter />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
