import React from 'react';

const Article = (props) => {
  return(
    <article className="articleSection">
      <div className="articleHeader">
        <h1 className="articleTitle">{props.data.title}</h1>
        <div className="articleInfo">
          
        </div>
      </div>
      <div className="articleBody">
        <p dangerouslySetInnerHTML={{__html : props.data.content}}></p>
      </div>
    </article>
  )
}

export default Article;