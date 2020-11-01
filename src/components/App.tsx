import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"

import { config } from "src/config"

export const App: React.FC = () => {
  return (
    <Router>
      <h1>{config.message}</h1>
      <ul>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={["/", "/page1"]}>
          <h2>page1</h2>
        </Route>
        <Route exact path="/page2">
          <h2>page2</h2>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
