import React from "react";
// import { Comment, CommentGroup, Card } from "semantic-ui-react";
import styled from "styled-components";

const Div = styled.div`
  height: 380px;
  width: 100%;
  background: rgb(13, 7, 66);
  display: flex;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 20px;
`;

function PlanetaryCards({ date, explanation, hdurl, title, copyright }) {
  return (
    <Div className="planetary-card" key={hdurl}>
      <Image className="planetary-img" src={hdurl} alt="" />
      <div className="planetary-info">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{explanation}</p>
        <h4>{copyright}</h4>
      </div>
    </Div>

    // <Card>
    //   <CommentGroup>
    //     <Comment>
    //       <Comment.Avatar src={hdurl} width="200" />
    //       <Comment.Content>
    //         <Comment.Text> {title}</Comment.Text>
    //         <Comment.Metadata> {date} </Comment.Metadata>
    //         <Comment.Text> {explanation} </Comment.Text>
    //         <Comment.Author> {copyright} </Comment.Author>
    //       </Comment.Content>
    //     </Comment>
    //   </CommentGroup>
    // </Card>
  );
}

export default PlanetaryCards;
