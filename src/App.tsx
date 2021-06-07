import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/other' render={() => <div>Another route</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
