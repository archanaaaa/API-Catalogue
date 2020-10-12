import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { setCookie } from "../utils/cookies";
import Header from './Header';
import { Card,  CardHeader,CardBody,Button,} from 'reactstrap';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSuccess: false,
      responseResult: "",
      isError: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    if (
      this.state.email === "api" &&
      this.state.password === "api"
    ) {
      this.setState({
        isSuccess: true,
        responseResult: "basic_user",
      });
    }
    {
      this.setState({ isError: true });
    }
  };

  render() {
    const responseResult = this.state.responseResult;

    if (this.state.isSuccess && responseResult === "basic_user") {
      setCookie("token", responseResult, 1);
      return <Redirect to="/main" />;
    } else if (this.state.isError) {
      return (
        <div>Invalid Credentials , Please try again !</div>
      );
    }

    return (
      <React.Fragment>
        <Header />
        
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3 mt-5">
            <Card>
            <CardBody  outline="info">
            <CardHeader tag="h3" color="info"><center>Login</center></CardHeader>
            <div className="container">
            <div className="row">
            <div className="col-10 offset-1 mt-2">
            <section class="formClass">
            <form onSubmit={this.handleLogin} id="login">
              <div className="form-label-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />
              <div className="form-label-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Login
              </button>
              <br />
              <div>
                Not a member yet?{" "}
                <a href="/signUp" className="p-2 text-dark">
                  Sign up
                </a>
              </div>
            </form>
          </section>
          </div>
          </div>
          </div>
          </CardBody>
          </Card>
          
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Login;
