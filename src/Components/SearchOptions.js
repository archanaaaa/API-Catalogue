import React, { Component } from 'react';
import { Card,  CardHeader,CardBody,Button, Form, FormGroup, Label,  Col} from 'reactstrap';
import ListingTable from './ListingTable';

export default class SearchOpions extends Component {
    constructor(props){
        super(props)
        this.state = {
            Product_Type : 'FACETS',
            Domain : 'Product',
            Version_Compatibility : '5.30',
            Type_of_Service : 'Base',
            showTableContent : false,
           
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        
    }   

    clear=(event)=> {
        this.setState({
            showTableContent : false
        });
        event.preventDefault();
    }

    handleChange=(event)=> {
        
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
        showTableContent : false,
          [name]: value,
        });
        event.preventDefault();
      }

    handleSubmit=(event)=> {

        this.setState({
            showTableContent : true});
        event.preventDefault();
       
    }

    render(){
        
        const temp = this.props.data;
        
        return(
                <>
                <div className="container">
                <div className="row">
                <div className="col-6 offset-3">
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
                            <Col xs={{size: 4, offset: 2}}>
                                <Button type="submit" color="info" size="lg">
                                    Search
                                </Button>
                            </Col>
                            <Col xs={{size: 4, offset: 0}}>
                                    <Button type="submit" color="info" onClick={this.clear} size="lg" >
                                       Clear
                                    </Button>
                            </Col>
                        </FormGroup>
                        </Form> 
                        </CardBody>
                    </Card>
                </div>
                </div>
                </div>
                {this.state.showTableContent  && 
                
                <ListingTable data = {temp} 
                showTableContent = {this.state.showTableContent}
                Product_Type = {this.state.Product_Type}
                Domain = {this.state.Domain}
                Version_Compatibility = {this.state.Version_Compatibility}
                Type_of_Service = {this.state.Type_of_Service}/>
                
                
                
                }
                
                
            </>
        );
    }
}

