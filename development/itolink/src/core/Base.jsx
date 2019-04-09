import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from '../containers/Template/Header/Header';
import Home from '../containers/MainPage/Home/Home';
import GlobalProvider from '../context/context';
import Footer from '../containers/Template/Footer/Footer';
import Post from '../containers/MainPage/Post/Post';
import About from '../containers/MainPage/About/About';
class Base extends Component {
  render(){
    // console.log(this)
    return(
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/article/:url" exact component={Post} />
        <Route path="/about" exact component={About} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default GlobalProvider(Base);