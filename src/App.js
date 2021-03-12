import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/layout.js';
import SearchSubreddits from './search.js';
import FavouritePosts from './favourites.js';
import "tailwindcss/tailwind.css"
import './App.css';

function App() {

  return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/sperrin7009-Frontend-Reddit/favourites" component={FavouritePosts}/>
          <Route path="/sperrin7009-Frontend-Reddit/search" component={SearchSubreddits}/>
        </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
