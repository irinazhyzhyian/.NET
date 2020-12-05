import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../PaymentMethod/AddPaymentMethod.css'  

const apiUrl = 'https://localhost:44364/api/';  

class EditPaymentMethod extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeMethod = this.onChangeMethod.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
           method: ''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get(apiUrl + 'paymentmethod/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                method: response.data.method });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeMethod(e) {  
    this.setState({
        method:e.target.value
    });    
  }  
  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
        method: this.state.method,  
     
    };  
    axios.put(apiUrl + 'paymentmethod', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/PaymentMethodList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="method" sm={2}>Method</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="method" value={this.state.method} onChange={this.onChangeMethod}  
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
  
export default EditPaymentMethod;  