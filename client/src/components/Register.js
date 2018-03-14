import React, { Component } from 'react';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      Email:'',
      Password:'',
    } 
     this.inputFirstname = this.inputFirstname.bind(this);
     this.inputLastname = this.inputLastname.bind(this);
     this.inputEmail = this.inputEmail.bind(this);
     this.inputPassword = this.inputPassword.bind(this);
  }
  

    inputFirstname(event) {
      this.setState({
        firstName: event.target.value
      })
    }
    inputLastname(e) {
      this.setState({
        lastName: e.target.value
      })
    }
    inputEmail(e) {
      this.setState({
        Email: e.target.value
      })
    }
    inputPassword(e) {
      this.setState({
        Password: e.target.value
      })
    }

    registerSubmit(e){
      const {
        firstName,
        lastName,
        Email,
        Password } = this.state

      e.preventDefault(); 
      fetch('/api/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: Email,
          password: Password
        }),
      }).then(res => res.json())  
      e.target.reset();  
}

    render() {
      return (
        <div className="">
            <form onSubmit={this.registerSubmit.bind(this)} >
              <div className="form-group">
                <input
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter firstname"
                onChange={this.inputFirstname}
                
                />
              </div>
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter lastname"
                onChange={this.inputLastname}

                />
              </div>
              <div className="form-group">
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                onChange={this.inputEmail}

                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control"
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={this.inputPassword}

                />
              </div>
              <button
              
              type="submit" 
              className="btn btn-primary">Submit
              </button>
            </form>
        </div>
      );
    }
  }

  export default Register;