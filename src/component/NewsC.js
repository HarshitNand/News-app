import React, { Component } from 'react'
import NewIeam from './NewIeam'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

constructor(props){
    super(props);
    this.state = {
        articles: [],
        loading: false,
        page:1,
        totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newapp`;
}

async updateNews(){ 
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json()
  this.props.setProgress(70); 
  this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    })
      this.props.setProgress(100);
}

async componentDidMount(){ 
    this.updateNews();
}

 handlePrevClick = async ()=>{
    this.setState({page:this.state.page-1});
    this.updateNews();
 //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
   // this.setState({loading: true});
    //let data = await fetch(url);
    //let parsedData = await data.json()
    //console.log(parsedData);  
    //this.setState({
       // page: this.state.page - 1,
     //   articles: parsedData.articles,
       // loading: false
   // })

}

 handleNextClick = async ()=>{
  this.setState({page:this.state.page+1});
  this.updateNews();
//if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&////apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //this.setState({loading: true});
        //let data = await fetch(url);
        //let parsedData = await data.json() 
        //this.setState({
        //    page: this.state.page + 1,
      //      articles: parsedData.articles,
    //        loading: false
  //      })
//}
    }
     /* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next </button>
      </div>
      */
      fetchMoreData = async() => {
        this.setState({page:this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a845a7134cc64dc88e6fde3770f2db54&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
            })
      };
  
  render() {
    return (
      <>
      <h1 className="text-center " style={{margin: '55px 0px'}}>NewsApps - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4 className="text-center ">Loading...</h4>}
        >
          <div className="container ">
      <div className="row"> 
      { this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewIeam title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div> 
      })} 
      </div>
      </div> 
      </InfiniteScroll>
    
  </>
    )
  }
}
