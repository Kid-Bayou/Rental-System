import { Link } from "react-router-dom"; 

function SignIn() {
  return (
    <>
      <div className="sign-container">
        <h1>Sign In</h1>

        <form className="sign-form">
          <div className="input-container">
            <label className="input-label">Email address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter email"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter password"
            />
          </div>
          <div className="">
            <button type="submit" className="sign-button">
              Sign In
            </button>
          </div>
          <p className="sign-text">
            Don't have an account <Link to="/signup">Sign Up?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
