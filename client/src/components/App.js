import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Landing = () => <h2>Landing</h2>;
const GamesNew = () => <h2>Game New Form</h2>;
const GamesShow = () => <h2>Game Show</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <Footer />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path ='/games/new' component={GamesNew} />
          <Route exact path ='/games/:gameId' component={GamesShow} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
