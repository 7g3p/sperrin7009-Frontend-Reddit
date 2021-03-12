import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/layout.js';
import SearchSubreddits from './search.js';
import FavouritePosts from './favourites.js';
import "tailwindcss/tailwind.css"
import './App.css';

function App() {

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route path="/favourites" component={FavouritePosts}/>
          <Route path="/search" component={SearchSubreddits}/>
        </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
