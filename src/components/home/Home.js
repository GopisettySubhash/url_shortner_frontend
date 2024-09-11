import React from 'react';
import Navbar from "../navbar/Navbar";
import ToolCard from "./toolCard/ToolCard";
import {Col, Container, Row} from "reactstrap";

function Home(props) {

    return (
       <React.Fragment>
           <Navbar/>
           <Container fluid>
               <Row>
                   <Col md={4}>
                        <ToolCard name={"URL SHORTNER"} link={"/urlShortner"}/>
                   </Col>
               </Row>
           </Container>
       </React.Fragment>

    );
}

export default Home;