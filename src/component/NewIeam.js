import React, { Component } from "react";

export default class NewIeam extends Component {
 
  render() {
    //let { title, discription,imageUrl,newUrl } = this.props; //this .prop is boject we pull the title,discription (destructure-method)---
    let {title, description, imageUrl, newsUrl,author,date} = this.props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {author? author :" Unknown" } on {new Date(date).toGMTString() }</small></p>
                    <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
  }
}
