import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/layout.js';
import SearchSubreddits from './search.js';
import FavouritePosts from './favourites.js';
import "tailwindcss/tailwind.css"
import './App.css';

function App() {

  return (
      <HashRouter>
      <Layout>
          <Route path="/favourites" component={FavouritePosts}/>
          <Route path="/search" component={SearchSubreddits}/>
        </Layout>
      </HashRouter>
  );
}

export default App;
