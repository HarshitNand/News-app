import React, { Component } from "react";
import NavBar from "./component/NavBar";
import NewsC from "./component/NewsC";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



// Your API key is: a845a7134cc64dc88e6fde3770f2db54

class App extends Component {
  render() {
    return (
      <div>
   < BrowserRouter>
        <NavBar />
    <Routes>  
       < Route path="/" element={<NewsC key="general" pageSize={10} country="in" category="general" />} />
       < Route path="/business"element={<NewsC  key="business" pageSize={10} country="in" category="business"/>} />
      <Route  path="/entertainment" element={<NewsC key="entertainment" pageSize={10} country="in" category="entertainment"/>} />
      <Route  path="/general" element={<NewsC  key="general"pageSize={10} country="in" category="general"/>}/>
      <Route  path="/health" element={<NewsC  key="health"pageSize={10} country="in" category="health"/>}/>
      <Route  path="/science" element={<NewsC  key="science"pageSize={10} country="in" category="science"/>}/>
      <Route  path="/sports" element={<NewsC  key="sports"pageSize={10} country="in" category="sports"/>}/>
      <Route  path="/technology" element={<NewsC  key="technology"pageSize={10} country="in" category="technology"/>} />
    </Routes>
 </BrowserRouter>
      </div>
    );
  }

}

export default App;
