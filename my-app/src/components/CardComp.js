import { Col, Row , Card } from "react-bootstrap";


const CardComp =() =>{
    return(
            <Row>
                <Col sm="12" className="mb-3">
                    <Card className="d-flex flex-row">
                        <Card.Img variant="top" src="images/p1.jpg" className="card-image"/>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <div className="card-title">
                                    Breakfast 1
                                </div>  
                                <div className="card-price">
                                    15 $
                                </div>  
                            </Card.Title>
                            <Card.Text>
                                <div className="card-description text-muted">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
}
export default CardComp