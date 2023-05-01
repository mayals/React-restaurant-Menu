import { Col, Row , Card } from "react-bootstrap";

// https://www.react-reveal.com/examples/common/zoom/
import Zoom from 'react-reveal/Zoom';
import React from 'react';


const CardComp =(props) =>{
    return(
        <React.Fragment >
            <Row>
            <Zoom left>
            
            { props.data.length ? props.data.map((item) => {               
                                        return( 
                                            <div key={item.id}>
                                                <Col sm="12" className="mb-3" >
                                                    <Card className="d-flex flex-row">
                                                        <Card.Img variant="top" className="card-image" src={`images/${item.img}`} />
                                                        <Card.Body>
                                                            <Card.Title className="d-flex justify-content-between">
                                                                <div className="card-title">
                                                                    {item.title}
                                                                </div>  
                                                                <div className="card-price">
                                                                    {item.price}
                                                                </div>  
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <div className="card-description text-muted">
                                                                    {item.description}
                                                                </div>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </div>   
                                            )
                                        }):<div>No data</div> 
            }
            
            </Zoom>
            </Row> 
        </React.Fragment>  
    )}

export default CardComp;