import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

const apiUrl = 'https://localhost:44364/api/';  

class AddApartment extends React.Component{  
constructor(props){  
super(props) 
this.state = {  
    arae: '',
    address: '',
    tenantsCount: ''
}  
}   

AddApartment=()=>{  
    const obj = {  
        id:this.props.match.params.id,  
        area: this.state.area,
        address: this.state.address,
        tenantsCount: this.state.tenantsCount,
     
    };  
  axios.post(apiUrl + 'apartment', obj)  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/ApartmentList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/ApartmentList')  
}  
})  
}  
   
onChangeArea(e) {  
    this.setState({  
    area: e.target.value  
    });  
  }  

onChangeAddress(e) {
    this.setState({
        address: e.target.value
    });
}

onChangeTenantsCount(e) {
    this.setState({
        tenantsCount: e.target.value
    });
}
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form">  
    <Col>  
                        <FormGroup row>  
                            <Label for="area" sm={2}>Area</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="area" value={this.state.area} onChange={this.onChangeArea.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>
                    <Col>  
                        <FormGroup row>  
                            <Label for="address" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="address" value={this.state.address} onChange={this.onChangeAddress.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="tenants" sm={2}>Tenants Count</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="tenants" value={this.state.tenantsCount} onChange={this.onChangeTenantsCount.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>      
      <Col>  
        <FormGroup row>  
          <Col sm={4}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddApartment.bind(this)} className="btn btn-success">Submit</button>  
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