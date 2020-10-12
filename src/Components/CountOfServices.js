import React, { Component } from 'react';
import { Card,  CardHeader,CardBody,} from 'reactstrap';


export default class CountOfServices extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseCount : "",
            premiumCount : "",
        }
    }

    CountState=(e,baseCount,premiumCount)=>{
        this.setState ({
            baseCount : baseCount,
            premiumCount : premiumCount
        })
    }

    render(){

        const data = this.props.data;
        let dataArray = [];
        for (var key in data) {
        dataArray.push(data[key]);
        }
        var baseCount = 0,premiumCount = 0;
        dataArray.map((item) => {
        if(item.typeofLicense == "Base") baseCount++;  
        else premiumCount++  ;          
        });
        console.log("baseCount : "+baseCount+" premiumCount : "+premiumCount);
        

        return(
            <div className="container">
                <div className="row">
                    <div className="col-5 offset-1">
                        <Card className="mt-2">
                            <CardBody>
                                <CardHeader tag="h5" color="info">Total Open Access Services : {baseCount}</CardHeader>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-5">
                        <Card className="mt-2">
                            <CardBody>
                                <CardHeader tag="h5" color="info">Total Premium Services : {premiumCount}</CardHeader>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}