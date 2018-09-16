import React,{PureComponent} from 'react';
import Context from "./Context"
class List extends PureComponent{
  render(){
    return(
    <Context.Consumer>
      {
        stateNN=>{
          <div>
            {
              this.props.items.map((item, index) =>{
                return (
                  <div key={index}>
                    <a onClick={stateNN=>stateNN.changePage(item)} href="#">
                      {item}
                    </a>
                  </div>)
              })
            }
          </div>

        }
      }
      </Context.Consumer>
    )
  }
}



export default List;
