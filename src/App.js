import React, { Component } from "react";
import NavBar from "./component/NavBar";
import NewsC from "./component/NewsC";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



// Your API key is: a845a7134cc64dc88e6fde3770f2db54

class App extends Component {
  pageSize=15;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:this.state.progress})
  }
  render() {
    
    return (
      <div>
   < BrowserRouter>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
        />
    <Routes>  
       < Route exact path="/Home" element={<NewsC setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
       < Route exact path="/business"element={<NewsC setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
      <Route  exact path="/entertainment" element={<NewsC setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
      <Route  exact path="/general" element={<NewsC setProgress={this.setProgress} key="general"pageSize={this.pageSize} country="in" category="general"/>}/>
      <Route  exact path="/health" element={<NewsC setProgress={this.setProgress} key="health"pageSize={this.pageSize} country="in" category="health"/>}/>
      <Route  exact path="/science" element={<NewsC setProgress={this.setProgress} key="science"pageSize={this.pageSize} country="in" category="science"/>}/>
      <Route  exact path="/sports" element={<NewsC setProgress={this.setProgress} key="sports"pageSize={this.pageSize} country="in" category="sports"/>}/>
      <Route  exact path="/technology" element={<NewsC setProgress={this.setProgress} key="technology"pageSize={this.pageSize} country="in" category="technology"/>} />
    </Routes>
 </BrowserRouter>
      </div>
    );
  }

}

export default App;
