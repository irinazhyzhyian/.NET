import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

const apiUrl = 'https://localhost:44364/api/';  

class AddApartment extends React.Component{  
constructor(props){  
super(props) 
this.state = {  
    firstName: '',
    lastName: '',
    fatherName: '',
    accountNumber: '',
    apartmentId: ''
}  
}   

AddTenants=()=>{  
    const obj = {  
        id:this.props.match.params.id,  
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        fatherName: this.state.fatherName,
        accountNumber: this.state.accountNumber,
        apartmentId: this.state.apartmentId,
     
    };  
  axios.post(apiUrl + 'tenants', obj)  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/TenantsList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/TenantsList')  
}  
})  
}  
onChangeFatherName(e) {  
  this.setState({
      fatherName:e.target.value
  });    
}  

onChangeFirstName(e) {  
  this.setState({
      firstName:e.target.value
  });    
}  

onChangeLastName(e) {  
  this.setState({
      lastName:e.target.value
  });    
}  

onChangeAccountNumber(e) {  
  this.setState({
      accountNumber:e.target.value
  });    
}  

onChangeApartmentId(e) {
    this.setState({
        apartmentId:e.target.value
    });
}

render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form">  
    <Col>  
                        <FormGroup row>  
                            <Label for="firstName" sm={2}>First Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeFirstName.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>
                    <Col>  
                        <FormGroup row>  
                            <Label for="lastName" sm={2}>Last Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeLastName.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col> 
                    <Col>  
                        <FormGroup row>  
                            <Label for="fatherName" sm={2}>Father Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="fatherName" value={this.state.fatherName} onChange={this.onChangeFatherName.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col> 
                    <Col>  
                        <FormGroup row>  
                            <Label for="accountNumber" sm={2}>Account Number</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="accountNumber" value={this.state.accountNumber} onChange={this.onChangeAccountNumber.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="apartmentId" sm={2}>Apartment Id</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="apartnentId" value={this.state.apartmentId} onChange={this.onChangeApartmentId.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>      
      <Col>  
        <FormGroup row>  
          <Col sm={4}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddTenants.bind(this)} className="btn btn-success">Submit</button>  
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
   
export default AddApartment;