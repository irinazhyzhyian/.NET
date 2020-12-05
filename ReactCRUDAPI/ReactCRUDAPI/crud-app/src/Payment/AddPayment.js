import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

const apiUrl = 'https://localhost:44364/api/';  

class AddPayment extends React.Component{  
constructor(props){  
super(props)  

    this.onChangeServiceId = this.onChangeServiceId.bind(this);  
    this.onChangeApartmentId = this.onChangeApartmentId.bind(this);  
    this.state = {  
        serviceId: '',
        apartmentId: ''
    }  
}   

AddPayment=()=>{  
    const obj = {  
        serviceId: this.state.serviceId,
        apartmentId: this.state.apartmentId  
     
    };  
  axios.post(apiUrl + 'payment', obj)  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/PaymentList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/PaymentList')  
}  
})  
}  
   
onChangeServiceId(e) {  
    this.setState({
        serviceId: e.target.value
    });    
  }  

  onChangeApartmentId(e) {  
    this.setState({
        apartmentId: e.target.value
    });    
  }
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form">  
    <Col>  
                        <FormGroup row>  
                            <Label for="method" sm={2}>Service Id</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="serviceId" value={this.state.serviceId} onChange={this.onChangeServiceId}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>
                    <Col>  
                        <FormGroup row>  
                            <Label for="apartment" sm={2}>Apartment Id</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="apartmentId" value={this.state.apartmentId} onChange={this.onChangeApartmentId}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>   
      <Col>  
        <FormGroup row>  
          <Col sm={4}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddPayment} className="btn btn-success">Submit</button>  
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
   
export default AddPayment;