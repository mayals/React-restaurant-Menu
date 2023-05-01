import './App.css';
import NavbarComp from "./components/NavbarComp.js";
import HeaderComp from "./components/HeaderComp.js";
import CategoryComp from "./components/CategoryComp.js";
import CardComp from "./components/CardComp.js";
import { Container } from 'react-bootstrap';
import {data} from "./data.js"
import { useState } from 'react';
import React from 'react';

const App = () => {

    const [resultData ,setResultData]= useState(data)

    // get new array cantain all categories(unrepeated categories) by using ...new Set
    const categoriesArray = [ 'ALL', ...new Set(data.map( (item) =>item.category)) ]
    console.log("categoriesArray",categoriesArray)


    // filter by category:
    const filterByCategoryFunction = (choicedCat) =>{
                                                    if ( choicedCat === "ALL" ){
                                                                setResultData(data)
                                                        } else{
                                                                const filteredDate = data.filter( (item) => item.category === choicedCat )
                                                                setResultData(filteredDate)
                                                        }                        
                                                    }
    
    
    // filter by search form
    const filterBySearchFormFunction = (inputWord) =>{
                                                    if ( inputWord !== " " ){
                                                        const filteredDate = data.filter( (item) => item.title === inputWord  )
                                                        console.log("filteredDate",filteredDate)
                                                        setResultData(filteredDate)
                                                    }                       
                                                    }

    return ( 
        <React.Fragment>
            <div className="App-style"> 
            
                <NavbarComp  filterBySearchFormFunction={filterBySearchFormFunction}/>
                <Container>
                    <HeaderComp/>
                    <CategoryComp  filterByCategoryFunction={filterByCategoryFunction} categoriesArray={categoriesArray}/>              
                    <CardComp data ={resultData}/>
                </Container>
           
            </div>
        </React.Fragment>    
    );
}
export default App;