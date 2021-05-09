import React from "react";
import Button from "../buttom/Button";
import "./signin.scss";

export default function Signin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = event => {
      event.preventDefault()
      setEmail('')
      setPassword('')
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
          <div className="group">   
          <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>
        <input name="email" value={email} required type="email" onChange={(e)=>setEmail(e.target.value)} className="form-input"/>
     
        </div>
        <div className="group">
        <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>
        <input name="password" value={password} required type="password" onChange={(e)=>setPassword(e.target.value)}className="form-input"/>
       
        </div>

        <Button type="submit" value="submit" >
            Sign in
        </Button>
      </form>
    </div>
  );
}
