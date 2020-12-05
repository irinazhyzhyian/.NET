import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
import AddPayment from './AddPayment'; 
import EditPayment from './EditPayment'; 
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

const apiUrl = 'https://localhost:44364/api/';  

  
export default class PaymentList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get(apiUrl + 'payment')  
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
          <h4 align="center">Payments List</h4> 
            <br></br>
            <Router>
            <Link to={'/AddPayment'} className="nav-link">Add</Link>
            <Switch>
            <Route path='/AddPayment' component={AddPayment} />  
            <Route path='/payment-edit/:id'  component={EditPayment}/>
            </Switch>
            </Router>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Id</th>  
                <th>Service Id</th> 
                <th>Apartment Id</th>
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