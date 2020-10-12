import React, { Component } from 'react';
import { Table, } from 'reactstrap';
import { Card,  CardHeader,CardBody,Button,} from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  


export default class ListingTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTableContent : this.props.showTableContent,
            data : [],
        }
    }
    

render(){
    //console.log("from listingTable : "+this.props.data);
     const  dataArray = this.props.data

       
        return(
                
                <div className="container mt-2">
                <div className="row">
                <div className="col-12 ">
                <Card>
                    <CardBody  outline="info">
                        <CardHeader tag="h3" color="info">Service Information</CardHeader>
                
                <Table responsive id="table-to-xl">
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
                    dataArray.filter(data =>data.typeofLicense===this.props.Type_of_Service && this.state.showTableContent ).map(data => (
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
                    <div className="row">
                        <div className="col-4 mt-1 offset-3" >
                            <ReactHTMLTableToExcel className="download-table-xls-button btn-info btn-lg" table="table-to-xl" filename="FacetReport" sheet="Sheet" buttonText="Export to excel"></ReactHTMLTableToExcel>
                        </div>
                        <div className="col-4 mt-1">
                        <Button className="shadow-sm hover" type="submit" color="info" size="lg" >
                            Send Email
                        </Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
                </div>
                </div>
                </div>
         );
    }
}