import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Author from './Author'
import ArticleTitle from './ArticleTitle'
import Article from './Article'
import HammerAd from './HammerAd'
import Scams from './Scams'
import Comments from './Comments'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <main className="expanded row">
        <div className="large-8 medium-12 columns article">
          <ArticleTitle />
          <Author />
          <Article />
          <div className="article-links">
            <Comments />
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>
          </div>
            <HammerAd />
            <Scams />
          
      </main>

      <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
      </footer>      
      </div>
      );
      }
      }

export default App;
