import React, { PureComponent } from "react";
//import { Switch, Route } from "react-router-dom";
import List from './List';
//Get Data
import getData from "./data";
import Context from "./Context"

class Articles extends PureComponent {
  state={
    articlesarray:[],
    page:1,
    items:[0,1,2,3,4,5,6,7,8,9,10]
  }
async  componentDidMount()  {
    let result = await getData(this.state.page);
    let fetchedArticles = result.response.results;
    console.log(result)
    fetchedArticles && this.setState({articlesarray:fetchedArticles})
  }

  render(){

    return (
      <Context.Consumer>
      {
        stateNN=> {
          this.setState({page:stateNN.currentPage})
          return(
            <React.Fragment>
              <List items={this.state.items}/>
              {this.showArticles()}
            </React.Fragment>
          )
        }
      }
      </Context.Consumer>
    )
  }
  showArticles = () => {

    const {articlesarray} = this.state
    const mappedArticles = articlesarray.map((element, index) => {
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
export default Articles;
