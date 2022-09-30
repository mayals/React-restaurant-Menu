import { Col, Row } from "react-bootstrap";

const  HeaderComp = () =>{
        return(
            <Row>
                <Col sm="12" className="justify-content-center  text-center">
                    <div className="header-style mt-3">
                        Food Menu
                    </div>
                    <div className="justify-content-center d-flex">
                        <p className="header-underline-style" ></p>
                    </div>
                </Col>
            </Row>
        );
}

export default HeaderComp ;