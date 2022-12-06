import React, { Component } from 'react'
import NewIeam from './NewIeam'
import PropTypes from 'prop-types'
export default class NewsC extends Component {
  
  static defaultProps = {
    country: 'in',
    pageSize: 20 //use  as veriable, 
    ,category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }

constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1
    }
}

async componentDidMount(){ 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false})
}

 handlePrevClick = async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })

}

 handleNextClick = async ()=>{
    
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
}
    }
  
  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApps - Top Headlines</h1>
      
      <div className="row"> 
      { this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewIeam title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div> 
      })} 
      </div> 
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next </button>
      </div>
  </div>
    )
  }
}
