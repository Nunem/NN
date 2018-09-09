import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import List from './List.js';
//Get Data
import getData from "./data";



class SwitchDemo extends Component {
  state={
    articles:[]
    items:[0,1,2,3,4,5,6,7,8,9,10]
  }
async  componentDidMount()  {
    let result = await getData();
    let fetchedArticles = result.response.results;
    console.log(result)
    fetchedArticles && this.setState({articles:fetchedArticles})
  }


  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        {this.showArticles()}
        <List items={this.state.items} click={this.showArticles}/>
      </React.Fragment>
    )
  }
  showArticles = (ii) => {

    let result = await getData(ii);
    let fetchedArticles = result.response.results;
    console.log(result)
    fetchedArticles && this.setState({articles:fetchedArticles})


    const {articles} = this.state
    const mappedArticles = articles.map((element, index) => {
      return(
        <div key={index}>
          <img src={element.fields.thumbnail}/>
          <h1>{element.webTitle}</h1>
          <h2>{element.sectionName}</h2>
        </div>
      )
    })
    return mappedArticles
  }


}
export default SwitchDemo;
