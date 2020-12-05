import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

const apiUrl = 'https://localhost:44364/api/';  

class AddServices extends React.Component{  
constructor(props){  
super(props) 
this.state = {  
    methodId: '',
    price: '',
    service: ''
}  
}   

AddServices=()=>{  
    const obj = {  
        id:this.props.match.params.id,  
        methodId: this.state.methodId,
        price: this.state.price,
        service: this.state.service,
     
    };  
  axios.post(apiUrl + 'services', obj)  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/ServicesList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/ServicesList')  
}  
})  
}  
   
onChangeMethodId(e) {  
    this.setState({  
    methodId: e.target.value  
    });  
  }  

onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
}

onChangeService(e) {
    this.setState({
      service: e.target.value
    });
}

render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form">  
                      <Col>  
                        <FormGroup row>  
                            <Label for="methodId" sm={2}>Method Id</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="methodId" value={this.state.methodId} onChange={this.onChangeMethodId.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>
                    <Col>  
                        <FormGroup row>  
                            <Label for="price" sm={2}>Price</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="price" value={this.state.price} onChange={this.onChangePrice.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="service" sm={2}>Service</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="service" value={this.state.service} onChange={this.onChangeService.bind(this)}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>      
      <Col>  
        <FormGroup row>  
          <Col sm={4}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddServices.bind(this)} className="btn btn-success">Submit</button>  
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
   
export default AddServices;