import React, {useState} from 'react';
import {Button, Col, Container, Input, InputGroup, Row} from "reactstrap";
import Navbar from "../navbar/Navbar";
import axios from 'axios';

function UrlShortner(props) {

    const [urlString, setUrlString] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [showCustomize, setShowCustomize] = useState(false);
    const [customizeInput, setCustomizeInput] = useState("");

    const urlInputHandler = (e) => {
        setUrlString(e.target.value);
    }

    const urlInputKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            generateOnClick();
        }
    }

    const customizeInputHandler = (e) => {
        setCustomizeInput(e.target.value);
    }

    const customizeInputKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            customizeOnClick();
        }
    }

    const customizeOnClick = async () => {
        try{
            const response = await axios.post('/customizeUrl',
                {url : urlString, customizedURL : customizeInput},  {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.data['success']){
                setCustomizeInput(response.data['urlMetaData']['tinyURL']);
            }
        }
        catch (e){
            console.log("error occurred during customizing url path");
        }
    }

    const generateOnClick = async () => {
        try {
            const response = await axios.post('/generateUrl', urlString, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            if(response.data['success']){
                setCustomizeInput(response.data['urlMetadata']['tinyURL'])
            }
            // console.log("done post call : ", response.data['urlMetadata']['tinyURL']);
        } catch (e) {
            console.log("error occurred during generating tinyURL : ", e);
        }
        setShowOutput(true);
    }

    return (
        <React.Fragment>
            <Navbar/>
            <Container fluid>
                <Row>
                    <Col md={2}/>
                    <Col>
                        <Row>
                            <Col>
                                <Input value={urlString}
                                       onChange={(e) => urlInputHandler(e)}
                                       onKeyDown={(e) => urlInputKeyPressHandler(e)}
                                       style={
                                           {
                                               "border": "2px solid black",
                                               "fontSize": "25px"
                                           }
                                       } className={"p-3 mt-5"}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}/>
                            <Col md={4} className={"text-center"}>
                                <Button onClick={() => generateOnClick()} className={"p-3 mt-5"}
                                        style={{"fontSize": "20px", "fontWeight": "500"}}>
                                    Generate URL
                                </Button>
                            </Col>
                            <Col md={4}/>
                        </Row>

                        <Row className={"mt-5"} style={{display: (showOutput ? "" : "none")}}>
                            <Col md={8}>
                                <Input value={customizeInput}
                                       onClick={() => setShowCustomize(true)}
                                       onChange={(e) => customizeInputHandler(e)}
                                       onKeyDown={(e) => customizeInputKeyPressHandler(e)}
                                       style={
                                    {
                                        "border": "2px solid black",
                                        "fontSize": "20px"
                                    }
                                } className={"p-2 mt-5"}/>
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => customizeOnClick()} className={"p-2 mt-5"}
                                        style={
                                            {
                                                display: (showCustomize ? "" : "none"),
                                                "width": "100%",
                                                "fontSize": "20px",
                                                "fontWeight": "500"
                                            }
                                        }>
                                    Customize
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}/>
                </Row>
            </Container>

        </React.Fragment>
    );
}

export default UrlShortner;