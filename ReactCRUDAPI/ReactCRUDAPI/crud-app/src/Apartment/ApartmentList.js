import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
import AddApartment from './AddApartment'; 
import EditApartment from './EditApartment'; 

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

const apiUrl = 'https://localhost:44364/api/';  

  
export default class ApartmentList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get(apiUrl + 'apartment')  
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
          <h4 align="center">Apartment List</h4> 
            <br></br>
            <Router>
            <Link to={'/AddApartment'} className="nav-link">Add</Link>
            <Switch>
            <Route path='/AddApartment' component={AddApartment} />  
            <Route exact path='/apartment-edit/:id'  component={EditApartment}/>
            </Switch>
            </Router>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Area</th>
                <th>Address</th>
                <th>Tenants Count</th> 
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