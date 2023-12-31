import { Link } from 'react-router-dom';
import axios from 'axios'
import './signUp.css'
import { useState } from 'react';
function SignUp(){
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        confirmPassword:''
    });
    const [isSuccessfull,setIsSuccessful]=useState(false)
   async function handleSignup(e){
    e.preventDefault()
 if (formData.password !== formData.confirmPassword) {
   alert("Passwords do not match");
   const response=await axios.post('./api/signup',{
    username:formData.username,
    password:formData.password
   })
   if(response.status===200){

   }
   return;
 }

    }
async function handleChange(e){
const {name,value}=e.target;
setFormData({...formData,[name]:value});
    }
    return (
        <>

      <div className="signUp">
        <div className="signUpForm">
          <form className="form">
            <h2>SIGNUP</h2>
            <div>
              <input
                name="username"
                value={formData.username}
                placeholder="create username"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                name="password"
                value={formData.password}
                placeholder="create password"
                onChange={handleChange}
                type="password"
                required
              />
            </div>
            <div>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="confirm your password"
                onChange={handleChange}
                type="password"
                required
              />
            </div>
            <div>
              <button onClick={handleSignup} className="signupbtn">
                Signup
              </button>
            </div>
            <p>
              {" "}
              already have an account ? <Link to="/login">login</Link>
            </p>
          </form>
          {isSuccessfull && <p>you have successfully signed in</p>}
        </div>
      </div>
      </>
    );
}
export default SignUp;
