import React, { Component } from 'react';
import PostData from './PostData';

class Login extends Component {

  constructor(props){
      super(props);
      this.state = {
        username:"",
        password:""
      }

  }


  onChange(e){
      console.log("onChange!");
  }

  async compPost() {
    console.log("*compPost*");
    try {
        let result = await fetch('http://localhost:8333/logg', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
              email: 'test'
            })
        });

    } catch(err) {
        console.log("*error*");
        console.log(err);
    }
  }

  render() {
    return (
        <div>
          <div>
            <h2>login page</h2>
            <lable>username</lable>
            <input type="text" name="username" onChange={this.onChange}/>
            <lable>password</lable>
            <input type="password" name="password" onChange={this.onChange}/>
            <input type="submit" value="login" onClick={this.compPost}/>

          </div>
        </div>

    );
  }
}

export default Login
