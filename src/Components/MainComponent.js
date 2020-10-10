import React, { Component } from 'react';
import { Table,Card,  CardHeader,CardBody,Button, Form, FormGroup, Label,  Col, Row, FormFeedback } from 'reactstrap';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            Product_Type : '',
            Domain : '',
            Version_Compatibility : '',
            Type_of_Service : '',
            data : null,
            baseCount : 0,
            premiumCount : 0,
            showTableContent : false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        
    }

    async componentDidMount() {
        const apiUrl = 'https://akfo7lkkp6.execute-api.us-east-1.amazonaws.com/dev/apis';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {console.log('This is your data', data);
                            this.setState({ data : data });
                            
                            var baseCount = 0;
                            this.state.data.map((item) => {
                                if(item.typeofLicense == "Base")
                                    baseCount++;              
                                });
                                console.log("baseCount : "+baseCount);
                                this.setState({baseCount : baseCount});

                                var premiumCount = 0;
                                this.state.data.map((item) => {
                                    if(item.typeofLicense == "Premium")
                                        premiumCount++;              
                                     });
                                    console.log("premiumCount : "+premiumCount);
                                    this.setState({premiumCount : premiumCount});

                            });     
       
    }   

    clear=(event)=> {
        this.setState({
            Product_Type : '',
            Domain : '',
            Version_Compatibility : '',
            Type_of_Service : '',
          });
    }

    handleChange=(event)=> {
        
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
        
        //console.log(name + " : "+value);
        //console.log('Current State is: ' + JSON.stringify(this.state));
        
      }

    handleSubmit=(event)=> {
        
        //console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        this.setState({showTableContent : true});
        event.preventDefault();
    }

    render(){
        const data = this.state.data;
        let dataArray = [];
        for (var key in data) {
        dataArray.push(data[key]);
        }
       
        return(
            <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-6 mt-3">
                    <Card>
                        <CardBody  outline="info">
                        <CardHeader tag="h3" color="info">Service Lookup</CardHeader>
                            <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="Product_Type"  xs={6}>Product Type</Label>
                            <Col xs={6} className="mt-2">
                            <select name="Product_Type" value={this.state.value} onChange={this.handleChange}>
                                <option value="FACETS">FACETS</option>
                                <option value="QNXT">QNXT</option>
                            </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="Domain" xs={6}>Domain</Label>
                            <Col xs={6} className="mt-2">
                            <select name="Domain" value={this.state.value} onChange={this.handleChange}>
                                <option value="Product">Product</option>
                                <option value="Claims">Claims</option>
                                <option value="Membership">Membership</option>
                                <option value="Accumulators">Accumulators</option>
                            </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="Version_Compatibility" xs={6}>Version Compatibility</Label>
                            <Col xs={6} className="mt-2">
                            <select name="Version_Compatibility" value={this.state.value} onChange={this.handleChange}>
                                <option value="5.30">5.30</option>
                                <option value="5.60">5.60</option>
                                <option value="5.70">5.70</option>
                            </select>
                            </Col>
                        </FormGroup>                            
                        <FormGroup row>
                            <Label htmlFor="Type_of_Service" xs={6}>Type of Service</Label>
                            <Col xs={6} className="mt-2">
                            <select name="Type_of_Service" value={this.state.value} onChange={this.handleChange}>
                                <option value="Base">Open Access</option>
                                <option value="Premium">Premium</option>
                            </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col xs={{size: 3, offset: 3}}>
                                <Button type="submit" color="info" onClick={this.clear}>
                                    Clear
                                </Button>
                            </Col>
                        
                            <Col xs={{size: 4, offset: 0}}>
                                <Button type="submit" color="info">
                                    Search
                                </Button>
                            </Col>
                        </FormGroup>
                        </Form> 
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-6 mt-5">
                
                <Card className="mt-5">
                    <CardBody>
                        <CardHeader tag="h5" color="info">Total Open Access Services : {this.state.baseCount}</CardHeader>
                    </CardBody>
                </Card>
                <Card className="mt-3">
                    <CardBody>
                    <CardHeader tag="h5" color="info">Total Premium Services : {this.state.premiumCount}</CardHeader>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 mt-2">
                <Card>
                    <CardBody  outline="info">
                        <CardHeader tag="h3" color="info">Service Information</CardHeader>
                <Table responsive>
                    <thead>
                        <tr className="text-center align-items-center">                        
                        <th>Service Name</th>
                        <th>Service Description</th>
                        <th>Product</th>
                        <th>Domain</th>
                        <th>Module</th>
                        <th>List of Services</th>
                        <th>Type of License</th>
                        <th>Product Compatibility</th>
                        <th>Link</th>
                        </tr>
                    </thead>
                    {
                    dataArray.filter(data =>data.typeofLicense===this.state.Type_of_Service && this.state.showTableContent ).map(data => (
                    <tbody key={data.apiId} >
                        <tr>                        
                        <td>{data.serviceName}</td>
                        <td>{data.description}</td>
                        <td>{data.product}</td>
                        <td>{data.domain}</td>
                        <td>{data.module}</td>
                        <td>{data.listofServices}</td>
                        <td>{data.typeofLicense}</td>
                        <td>{data.productCompatibility}</td>
                        <td>{data.link}</td>
                        </tr>                        
                    </tbody>
                    ))}
                    </Table>
                    </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Main;