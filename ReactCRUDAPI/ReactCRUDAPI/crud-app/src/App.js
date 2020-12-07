import React from 'react';   
import PaymentMethodList from './PaymentMethod/PaymentMethodList';  
import ApartmentList from './Apartment/ApartmentList';  
import TenantsList from './Tenants/TenantsList';  
import ServicesList from './Services/ServicesList';
import PaymentList from './Payment/PaymentList';
import EditPaymentMethod from './PaymentMethod/EditPaymentMethod';
import AddPaymentMethod from './PaymentMethod/AddPaymentMethod';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <div>
    <Router>   
      <nav class="navbar navbar-light bg-light">
        <Link to={'/'} className="nav-link">Home</Link> 
        <Link to={'/ApartmentList'} className="nav-link">Apartment</Link>            
        <Link to={'/PaymentMethodList'} className="nav-link">Payment Methods</Link>  
        <Link to={'/TenantsList'} className="nav-link">Tenanats</Link>  
        <Link to={'/ServicesList'} className="nav-link">Services</Link>  
        <Link to={'/PaymentList'} className="nav-link">Payments</Link>  
        </nav>  
        <Switch>  
          <Route exact path='/' component={Home} />  
          <Route exact path='/PaymentMethodList' component={PaymentMethodList} /> 
          <Route exact path='/ApartmentList' component={ApartmentList} />  
          <Route exact path='/TenantsList' component={TenantsList} /> 
          <Route exact path='/ServicesList' component={ServicesList} />
          <Route exact path='/PaymentList' component={PaymentList} />
          <Route path='/paymentmethod-edit/:id'  component={EditPaymentMethod}/>
          <Route path='/AddPaymentMethod' component={AddPaymentMethod} />
        </Switch> 
    </Router>  
    </div>
  );  
}  
  
export default App;  