import './App.css';
import { BrowserRouter , Route , Switch} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import Home from "./components/Home.js"
import Detail from './components/Detail.js';
import CreatePokemon from './components/CreatePokemon.js';
import axios from 'axios';
axios.defaults.baseURL = "https://pipokemons-production-b06b.up.railway.app/";


function App() {
  return (
    <BrowserRouter>
      <div className="app"> 
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/home" component={Home} ></Route>
        <Route path="/create" component={CreatePokemon}></Route>
        <Route path="/pokemons/:id" component={Detail} ></Route>
      </Switch >
      </div>
    </BrowserRouter>
  );
}

export default App;
