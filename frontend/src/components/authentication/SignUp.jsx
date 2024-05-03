import { Link } from "react-router-dom"; 

function SignUp() {
  return (
    <>
      <div className="sign-container">
        <h1>Sign Up</h1>

        <form className="sign-form">
          <div className="input-container">
            <label className="input-label">First name</label>
            <input
              type="text"
              className="input"
              placeholder="First name"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Last name</label>
            <input
              type="text"
              className="input"
              placeholder="Last name"
            />
          </div>
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
              Sign Up
            </button>
          </div>
          <p className="sign-text">
            Already registered <Link to="/signin">Sign In?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
