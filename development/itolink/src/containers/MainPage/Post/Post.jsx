import React, { Component } from 'react';
import Content from '../../Template/Content/Content';
import '../MainPage.css';
import Sidebar from '../../Template/Sidebar/Sidebar';
import Article from '../../../components/Article/Article';
import './Post.css';
import {GlobalConsumer} from '../../../context/context';
import API from '../../../services';

class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
      article : ""
    }
  }

  getArticle = () => {
    let article = this.props.history.location.state
    // console.log("article is :" , article)
    if(typeof(article) === 'undefined'){
      // console.log("this :", this.props.match.params.url)
      API.getBlogArticleViaSearch(this.props.match.params.url)
      .then((result) => {
        console.log("hasil Search: ", result);
        this.setState({
          article : result.items[0]
        }, () => {
          document.title = this.state.article.title
        })
      })
      .catch((error) => {
        console.error(error)
      })
    } else {
      console.log(this.props.history.location.state);
      this.setState({
        article : article
      }, () => {
        document.title = this.state.article.title
      })
    }
  }

  componentDidMount(){
    this.getArticle();
    document.querySelector("html").scrollTop = 0;
    console.log(this.state)
  }
  

  render(){
    console.log(this)
    return(
      <div className="mainSection">
        <div className="mainLeft">
          <Article data={this.state.article} />
        </div>
        <div className="mainRight">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default GlobalConsumer(Content(Post));