import React from "react";
import { Comment } from "semantic-ui-react";

function PlanetaryCards({ date, explanation, hdurl, title, copyright }) {
  return (
    // <div className="planetary-card" key={hdurl}>
    //   <img className="planetary-img" src={hdurl} alt="" />
    //   <div className="planetary-info">
    //     <h2>{title}</h2>
    //     <h4>{date}</h4>
    //     <p>{explanation}</p>
    //     <h4>{copyright}</h4>
    //   </div>
    // </div>
    <Comment>
      <Comment.Avatar src={hdurl} width=" 200" />
      <Comment.Content>
        <Comment.Text> {title}</Comment.Text>
        <Comment.Text> {date} </Comment.Text>
        <Comment.Text> {explanation} </Comment.Text>
        <Comment.Author> {copyright} </Comment.Author>
      </Comment.Content>
    </Comment>
  );
}

export default PlanetaryCards;
