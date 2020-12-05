import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
import AddServices from './AddServices'; 

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

const apiUrl = 'https://localhost:44364/api/';  

  
export default class TenantsList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get(apiUrl + 'services')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Services List</h4> 
            <br></br>
            <Router>
            <Link to={'/AddServices'} className="nav-link">Add</Link>
            <Route path='/AddServices' component={AddServices} />
            </Router>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Method Id</th>
                <th>Price</th>
                <th>Service</th>
                <th>Edit</th>  
                <th>Delete</th>
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  