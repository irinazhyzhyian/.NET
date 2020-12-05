import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../PaymentMethod/AddPaymentMethod.css'  

const apiUrl = 'https://localhost:44364/api/';  

class EditServices extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            methodId: '',
            price: '',
            service: ''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get(apiUrl + 'services/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                methodId: response.data.methodId,
                price: response.data.price,
                service: response.data.service,
                 });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
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
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
        methodId: this.state.methodId,
        price: this.state.price,
        service: this.state.service,
        
    };  
    axios.put(apiUrl + 'services', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/ServicesList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
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
  
export default EditServices;  