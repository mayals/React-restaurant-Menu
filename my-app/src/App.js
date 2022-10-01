import './App.css';
import NavbarComp from "./components/NavbarComp.js";
import HeaderComp from "./components/HeaderComp.js";
import CategoryComp from "./components/CategoryComp.js";
import CardComp from "./components/CardComp.js";
import { Container } from 'react-bootstrap';
import {data} from "./data.js"
import { useState } from 'react';

const App = () => {

    const [resultData ,setResultData]= useState(data)
    
    // filter by category
    const filterByCategoryFunction = (choicedCat) =>{
                      if ( choicedCat === "ALL" ){
                              setResultData(data)
                      } else{
                              const filteredDate = data.filter( (item) => item.category === choicedCat )
                              setResultData(filteredDate)
                      }                        
    }
    
    
    return ( 
              <div className="App-style"> 
                  <NavbarComp/>
                    <Container>
                        <HeaderComp/>
                        <CategoryComp filterByCategoryFunction={filterByCategoryFunction}/>
                        <CardComp data ={resultData}/>
                    </Container>
                </div>
    );
}
export default App;
