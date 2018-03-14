import React, { Component } from 'react';



class Login extends Component {
    
    render() {
      return (
        <div className="">
          <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
         </div>
      );
    }
  }

  export default Login;