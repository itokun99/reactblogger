import React from 'react';

const PostList = (props) => {
  let snippet = props.post.content
  snippet = snippet.replace(/(<\/?(?:img)[^>]*>)|<[^>]+>/ig, '$1');
  snippet = snippet.substring(0, 600)
  // snippet = snippet.concat(" (Read More..)");
  return(
    <div className="postList">
      <div className="postListItem">
        <h2 onClick={() => props.LinkArticle(props.post.url, props.post)} className="postListTitle">{props.post.title}</h2>
        <div className="postListInfo">
          <span className="postListInfoSpan">Penulis : {props.post.author.displayName}</span>
          {/* <span className="postListInfoSpan">{props.post.blog.id}</span> */}
        </div>
        <p className="postListSnippet" dangerouslySetInnerHTML={{__html : snippet}}></p>
      </div>
    </div>
  )
}

export default PostList;