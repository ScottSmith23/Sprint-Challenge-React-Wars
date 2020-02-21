import React,{useState} from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText,
  Col,
  Collapse
} from "reactstrap";
import styled from "styled-components"

const CardDiv = styled.div`
margin-top:30px;
`;
const CardComp = ({ char }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Col xs="5" md="5" xl="5">
        <CardDiv>
      <Card style={{backgroundColor:`DARKSLATEGREY`}} >
        <CardHeader style={{fontFamily: 'Knewave',fontSize:"23px",color:`KHAKI`}}>{char.name}</CardHeader>
        <CardBody>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',marginTop:"1rem",backgroundColor:"orange" }}>Bio Info</Button>
        <Collapse isOpen={isOpen} style={{color:`KHAKI`}}>
          <CardText>Height: {char.height}cm</CardText>
          <CardText>Mass: {char.mass}kg</CardText>
          <CardText>Hair Color: {char.hair_color}</CardText>
          <CardText>Eye Color: {char.eye_color}</CardText>
          <CardText>Skin Color: {char.skin_color}</CardText>
          <CardText>BirthYear: {char.birth_year}</CardText>
          <CardText>Gender: {char.gender}</CardText>
          </Collapse>
        </CardBody>
      </Card>
      </CardDiv>
    </Col>
 
  );
};
export default CardComp;
