import React, { Component } from 'react';  

class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.id}  
          </td>  
          <td>  
            {this.props.obj.name}  
          </td>
          <td>  
            {this.props.obj.surname}  
          </td>
          <td>  
            {this.props.obj.count}  
          </td> 
        </tr>  
    );  
  }  
}  
  
export default Table;  