import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

const apiUrl = 'https://localhost:44364/api/';  

class EditApartment extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeArea = this.onChangeArea.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeTenantsCount = this.onChangeTenantsCount.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
           arae: '',
           address: '',
           tenantsCount: ''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get(apiUrl + 'apartment/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                area: response.data.area,
                address: response.data.address,
                tenantsCount: response.data.tenantsCount });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
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
  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
        area: this.state.area,
        address: this.state.address,
        tenantsCount: this.state.tenantsCount,
     
    };  
    axios.put(apiUrl + 'apartment', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/ApartmentList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="area" sm={2}>Area</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="area" value={this.state.area} onChange={this.onChangeArea}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>
                    <Col>  
                        <FormGroup row>  
                            <Label for="address" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="address" value={this.state.address} onChange={this.onChangeAddress}  
                                placeholder="Enter" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="tenants" sm={2}>Tenants Count</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="tenants" value={this.state.tenantsCount} onChange={this.onChangeTenantsCount}  
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
  
export default EditApartment;  