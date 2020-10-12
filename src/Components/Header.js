import React ,  { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class Header extends Component{
    render(){
        return(
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>API Catalogue</h1>
                            <p>Get your customised search started ! </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}



        