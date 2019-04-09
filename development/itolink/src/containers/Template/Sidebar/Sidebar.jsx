import React, {Component} from 'react';
import AuthorCard from '../../../components/AuthorCard/AuthorCard';
import './Sidebar.css';

const Sidebar = (props) => {
  return(
    <div className="sidebarSection">
      <AuthorCard
        authorPic = "https://lh3.googleusercontent.com/-0cwy--RZ73k/Wtii8eYJwDI/AAAAAAAAAsQ/pUDxFp6TGpgRrLzYWKszeZFF3JxUklKqACEwYBhgL/w140-h138-p/Aho-Girl-08-500x285.jpg"
        authorName = "Indrawan Lisanto"
        authorBio = "Sebelum kiamat kuylah war dulu."
      />
    </div>
  )
}

export default Sidebar;