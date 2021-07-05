import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CardComp from "./CardComp";
import CardPagin from "./CardPagin";




export default function CardList() {

  const [chars, setChars] = useState([]);
  const [pages, setPages] = useState(1);
  function nextPage(){
    if(pages !== 9){
        setPages(pages + 1);
        console.log(pages)
          }
          else{
              alert(`Can't Go Next`)
          }
  };
  function PrevPage(){
      if(pages !== 1){
    setPages(pages - 1);
    console.log(pages)
      }
      else{
          alert(`Can't Go Previous`)
      }
  };

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pages}`)
      .then(response => {
        setChars(response.data.results);
        console.log(response.data);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("Nope", error);
      });
  }, [pages]);

  return (
    <Container >
        
      <Row style={{display:"flex",justifyContent:"center"}}>
        {chars.map(char => {
          return <CardComp char={char} />;
        })}
      </Row>
      <CardPagin next={nextPage} prev={PrevPage} currentP={`${pages}`} />
    </Container>
  );
}
