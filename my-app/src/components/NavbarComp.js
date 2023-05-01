// https://react-bootstrap.github.io/
import { Button,Container,Form,Nav,Navbar,Row } from 'react-bootstrap';
import { useState } from 'react';


const NavbarComp = (props) =>{
                        const [searchValue ,setSearchValue]= useState('')
                        console.log("searchValue",searchValue)

                        const getSearchvalueFunction = (searchValue) =>{
                                        props.filterBySearchFormFunction(searchValue)
                                        setSearchValue('')
                        }
                        return (
                                <Row>
                                    <Navbar bg="dark"  variant="dark" expand="lg">
                                    <Container>
                                        <Navbar.Brand href="#" style={{color:"#f40097"}}>Delicious Restaurant</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll >  
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                            type="search"
                                            placeholder="Search by title .."
                                            className="me-2"
                                            aria-label="Search"
                                            onChange={(e)=> { setSearchValue(e.target.value) } }
                                            value = {searchValue}
                                            />
                                            <Button onClick={ () => {getSearchvalueFunction(searchValue)} }  variant="outline-secondary">
                                            Search
                                            </Button>
                                        </Form>
                                        </Navbar.Collapse>
                                    </Container>
                                    </Navbar>
                                </Row>    
                                );
            }

export default NavbarComp;
