import React, { Component } from 'react';
import Content from '../../Template/Content/Content';
import '../MainPage.css';
import './Home.css';
import PostList from '../../../components/PostList/PostList';
import Sidebar from '../../Template/Sidebar/Sidebar';
import API from '../../../services';

class Home extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      blogPost : {},
      isShowPost : false,
      isLoading : true,
    }
  }

  getBlogPost = () => {
    API.getBlogPost().then((result) => {
      // console.log(result)
      if(typeof(result) !== "undefined"){
        this.setState({
          blogPost : result,
          isShowPost : true,
          isLoading : false,
        }, () => {
          this.state.blogPost.items.map((item, index) => {
            let custom_url = item.url;
            custom_url = custom_url.replace(".html", "");
            custom_url = custom_url.split("/");
            custom_url = custom_url[custom_url.length - 1];
            let state = {...this.state.blogPost}
            state.items[index].url = custom_url;
            this.setState({
              items : state.items[index]
            })
          })
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
  }

  handleLinkArticle = (url, props) => {
    this.props.history.push(`article/${url}`,props)
  }

  componentDidMount() {
    this.getBlogPost();
    document.title = "Code Pelajar - Tutorial Web Desain";
  }

  render(){
    let posts = this.state.blogPost.items;
    return(
      <div className="mainSection">
        <div className="mainLeft">
          <div className="postListSection">
            {
              this.state.isShowPost ? 
              posts.map((post) => {
                return(
                  <PostList 
                    key={post.id}
                    post={post}
                    LinkArticle={this.handleLinkArticle}
                  />      
                )
              }) : "Loading..."
            }
          </div>
        </div>
        <div className="mainRight">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Content(Home);