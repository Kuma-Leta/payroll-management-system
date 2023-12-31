import {Link} from 'react-router-dom'
import './login.css'
function Login(){
    return (
      <>
        <div className="login">
          <div className="loginForm">
            <form className="form">
              <h2>LOGIN</h2>
              <div>
                <input placeholder="enter username" type="text" required />
              </div>
              <div>
                <input placeholder="enter password" type="password" required />
              </div>
              <div>
                <input
                  placeholder="confirm your password"
                  type="password"
                  required
                />
              </div>
              <div>
                <button className="loginbtn">login</button>
              </div>
              <p>
                {" "}
                don't have an account ? <Link to="/signup">signup</Link>
              </p>
            </form>
          </div>
        </div>
      </>
    );
}
export default Login;