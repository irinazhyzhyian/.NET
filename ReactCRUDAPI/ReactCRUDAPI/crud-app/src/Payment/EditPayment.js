import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../PaymentMethod/AddPaymentMethod.css'  

const apiUrl = 'https://localhost:44364/api/';  

class EditPayment extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeServiceId = this.onChangeServiceId.bind(this);  
    this.onChangeApartmentId = this.onChangeApartmentId.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
           serviceId: '',
           apartmentId: ''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get(apiUrl + 'payment/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                serviceId: response.data.serviceId, 
                apartmentId: response.data.apartmentId });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
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
  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
        serviceId: this.state.serviceId,
        apartmentId: this.state.apartmentId  
     
    };  
    axios.put(apiUrl + 'payment', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/PaymentList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
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
                          <Button type="submit" color="success">Submit</Button>{' '}  
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
  
export default EditPayment;  