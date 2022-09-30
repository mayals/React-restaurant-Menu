import { Col, Row } from "react-bootstrap";


const CategoryComp =() =>{
    return(
        <Row>
            <Col sm="12" className="justify-content-center d-flex ">
                <div className="mb-5">
                  <button type="button" className="category-button  btn-outline-dark mx-2">ALL</button>
                  <button type="button" className="category-button  btn-outline-dark mx-2">Breakfast</button>
                  <button type="button" className="category-button  btn-outline-dark mx-2">Lunch</button> 
                  <button type="button" className="category-button  btn-outline-dark mx-2">Dinner</button> 
                </div>
            </Col>
        </Row>
    );
}
export default CategoryComp