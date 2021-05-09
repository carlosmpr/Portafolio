import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.scss";
function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={` ${size} menu-item`}
      onClick={() => 
        
        {
            console.log(linkUrl)
        history.push(`${match.url}${linkUrl}`)}}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={` background-image`}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
