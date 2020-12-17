import './App.css';
import {Home} from "./pages/Home/Home"
import Header from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,} from  "react-router-dom";
  import Backgroundfirst from "./hotel-pool.jpg";
  import Backgroundsecond from "./hotel-view.jpg";
  import Backgroundthird from "./Room.jpg"
import { Facilities } from './pages/Facilities/Facilities';
import {Rooms} from "./pages/Rooms/Rooms"
import {ContactUS} from "./pages/Contact-us/Contact-us"
import {HeaderUsTop} from "./components/ContactUsHeader/ContactUsHeader"

  



function App() {

  return (
    
    <Router>
      <Switch>
      <Route path="/Facilities">
      <Header background= {Backgroundfirst}/>
      <Facilities />
      </Route>
      <Route path="/Rooms">
        <Header background= {Backgroundthird} />
        <Rooms />
      </Route>
      <Route path="/Contact-us">
        <HeaderUsTop />
        <ContactUS />
      </Route>
      <Route path="/">
      <Header background= {Backgroundsecond} />
      <Home />
      </Route>
      </Switch>
      <Footer />
      </Router>
     
      
      
  );
}

export default App;
