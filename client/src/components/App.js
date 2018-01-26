import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Footer = () => <h2>Footer</h2>;
const Landing = () => <h2>Landing</h2>;
const GameForm = () => <h2>Game Form</h2>;
const GameShow = () => <h2>Game Show</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route path='/' component={Footer} />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path ='/game/new' component={GameForm} />
          <Route exact path ='/game/:gameId' component={GameShow} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
