import React from 'react';  
import axios from 'axios';  
import './AddPaymentMethod.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

const apiUrl = 'https://localhost:44364/api/';  

class AddPaymentMethod extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
  method: ''
}  
}   

AddPaymentMethod=()=>{  
  axios.post(apiUrl + 'paymentmethod', {method:this.state.method})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/PaymentMethodList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/PaymentMethodList')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({method:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="method" sm={2}>Method</Label>  
          <Col sm={10}>  
            <Input type="text" name="method" onChange={this.handleChange} value={this.state.method} placeholder="Enter" />  
          </Col>  
        </FormGroup>   
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={4}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddPaymentMethod} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
          </Col> 
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={2}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default AddPaymentMethod;