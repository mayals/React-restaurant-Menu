import { Col, Row } from "react-bootstrap";
import React from 'react';

const CategoryComp =(props) =>{

    const choicedCateFun = (choicedCat) => {
                                            props.filterByCategoryFunction(choicedCat)  
                                           }

    return(
        <React.Fragment >
        <Row className="mb-5">
            <Col sm="12" className="justify-content-center text-center d-flex">
                { props.categoriesArray.length ? ( props.categoriesArray.map((catitem,index) =>
                                                                            { return(
                                                                                    <div key={index}>
                                                                                        <button onClick={ () => {choicedCateFun(catitem)} }  
                                                                                                type="button" 
                                                                                                className="category-button  btn-outline-dark mx-2 my-2">
                                                                                                {catitem}
                                                                                        </button>
                                                                                    </div>
                                                                                    )   
                                                                            })
                                                 ):<div>No categories found !!</div> }
                
                                                
                
                {/* <div>
                  <button onClick={ () => {choicedCateFun("ALL")} }  type="button" className="category-button  btn-outline-dark mx-2 my-2">ALL</button>
                  <button onClick={ () => {choicedCateFun("Breakfast")} } type="button" className="category-button  btn-outline-dark mx-2 my-2">Breakfast</button>
                  <button onClick={ () => {choicedCateFun("Lunch")} } type="button" className="category-button  btn-outline-dark mx-2 my-2">Lunch</button> 
                  <button onClick={ () => {choicedCateFun("Dinner")} } type="button" className="category-button  btn-outline-dark mx-2 my-2">Dinner</button> 
                </div> */}
            </Col>
        </Row>
        </React.Fragment>
    );
}

export default CategoryComp