

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <p className="signup-link">
          Don't have an account? <a>Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
