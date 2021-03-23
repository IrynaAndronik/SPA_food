import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Fragment } from "react";
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound'
import { Category } from "./Pages/Category";
import { Recipe } from "./Pages/Recipe";

function App() {
  return (
      <Fragment>
        <Router basename='/SPA_food'>
            <Header />
            <main className="container content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path='/category/:name' component= {Category}/>
                    <Route path='/meal/:idMeal' component= {Recipe}/>
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </Router>
      </Fragment>
  );
}

export default App;
