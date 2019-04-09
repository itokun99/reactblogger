import React from 'react';
import './AuthorCard.css'

const AuthorCard = (props) => {
  return(
    <div className="authorCard">
      <img className="authorPic" src={props.authorPic} alt="" />
      <div className="authorText">
        <span className="authorName">{props.authorName}</span>
        <p className="authorBio">{props.authorBio}</p>
      </div>
      <div className="authorSocial">
        
      </div>
    </div>
  );
}

export default AuthorCard;