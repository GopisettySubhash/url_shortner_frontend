import React from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

function ToolCard(props) {

    return (
        <React.Fragment>
            <Link to={props.link} style={{ textDecoration: 'none' }}>
                <Card
                    className={"text-center"}
                    color="light"
                    style={{
                        padding: '5rem',
                        margin: '7rem 0rem 5rem 4rem'
                    }}
                >
                    <CardTitle tag="h5">
                        {props.name}
                    </CardTitle>
                </Card>
            </Link>

        </React.Fragment>

    );
}

export default ToolCard;