import React from 'react';
import {Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";

function Navbar(args) {

    return (
        <React.Fragment>
            <Container fluid>
                <Row className="text-white bg-primary p-5">
                    <Link to="/" style={{color:"white", textDecoration: 'none' }}>
                        <h1>TOOLS</h1>
                    </Link>

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Navbar;