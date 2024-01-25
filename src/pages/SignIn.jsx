import React from "react";
import { Link } from "react-router-dom";

const SingIn = () => {
  return (
    <div className="auth">
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
        <p>This is an error</p>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default SingIn;
