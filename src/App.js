  import {Routes, Route,} from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Subscribe from './containers/Subscribe';
import Layout from './components/Layout';
import Blog from './containers/Blog';
import GeneralContact from './containers/GeneralContact'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutCst from "./components/LayoutCst";
import Service from "./containers/Service";

function App() {
  return (
    <div className="App">
      <LayoutCst>
        <Routes>                  
            <Route path={"/blog"} element={<Blog/>}/>      
            <Route path={"/general-contact"} element={<GeneralContact/>} />
            <Route path={"/subscribe"} element={<Subscribe/>}/>
            <Route path={"/services"} element={<Service/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/"} index element={<Home/>} />
          </Routes>
      </LayoutCst>
    </div>
  );
}

export default App;
