import './App.css';
import NavbarComp from "./components/NavbarComp.js";
import HeaderComp from "./components/HeaderComp.js";
import CategoryComp from "./components/CategoryComp.js";
import CardComp from "./components/CardComp.js";
import { Container } from 'react-bootstrap';



const App = () => {
  return ( 
  <div className="App-style"> 
      <NavbarComp/>
        <Container>
            <HeaderComp/>
            <CategoryComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
        </Container>
     </div>
  );
}








export default App;
