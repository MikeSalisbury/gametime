import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const GameForm = () => <h2>Game Form</h2>;
const GameShow = () => <h2>Game Show</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Landing} />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
