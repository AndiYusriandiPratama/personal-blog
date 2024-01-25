import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="auth">
      <h1>SignUp</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign Up</button>
        <p>This is an error</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
