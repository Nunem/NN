import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import Articles from "./Articles";
import Context from "./Context"

class App extends PureComponent{
  state={
    currentPage:1,
    changePage:newPage=>this.setState({currentPage:newPage})
  }
  render(){

    return(
      <div>
          <Context.Provider value={this.state}>
              <Articles/>
          </Context.Provider>
      </div>
    )
  }
};

export default App;
