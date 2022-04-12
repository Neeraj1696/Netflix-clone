import "./App.css";
import Homescreen from "./Components/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
