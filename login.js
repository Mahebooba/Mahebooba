import React from "react"
import './Ap.css';
function Login(){
  return(
    <form>
        <h1>Login</h1>
        <div data-mdb-input-init class="forms">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>
        <br/>
        <div data-mdb-input-init class="form-control">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>
        <br/>
        <div class="remember">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
                <a href="#!">Forgot password?</a>
            </div>
          </div>
        </div>
        <br/>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="Signin">Sign in</button>
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
        </div>
      </form>
  );
}
export default Login;