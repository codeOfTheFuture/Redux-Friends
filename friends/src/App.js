import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './views/LoginView';
import FriendsListPage from './views/FriendsListView';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Friends</h1>
      <Route exact path="/" component={LoginPage} />
      <Route path="/friends-list" component={FriendsListPage} />
    </div>
  );
}

export default App;
