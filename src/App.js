import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SongProvider } from "./context/useContext";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <SongProvider>
                <Home />
              </SongProvider>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
