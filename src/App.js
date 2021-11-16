import {Routes, Route,} from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Subscribe from './containers/Subscribe';
import Layout from './components/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path={"/"} index element={<Home/>} />
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/subscribe"} element={<Subscribe/>}/>
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
