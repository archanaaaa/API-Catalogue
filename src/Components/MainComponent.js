import React, { Component } from 'react';
import CountOfServices from './CountOfServices';
import SearchOpions from './SearchOptions';
import Header from './Header';

export default class Main extends Component {
    state = {
            data : "",
        };    

    async componentDidMount() {
        var responseList = []
         
                const apiUrl = 'https://akfo7lkkp6.execute-api.us-east-1.amazonaws.com/dev/apis';
                await fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('This is your data', data);     
                        //for(var x in data)
                        //{ 
                          //  responseList.push(data[x]);
                        //}
                        this.setState({data : data});
                     })
    }
 
   render(){
       console.log("from main : "+this.state.data);
            return(
            <div>
            <Header/>
            <div className="container">
            <div className="row">
                <div className="col-12  mt-2"> 
                <CountOfServices data={this.state.data}/>
                </div>
                <div className="col-12  mt-2">
                <SearchOpions data = {this.state.data}/>
                </div>                
            </div>
            </div>
            </div>
        );
    }
}