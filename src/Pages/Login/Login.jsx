import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  const handleGoogleLogin = () => {};
  return (
    <div className="mx-2">
      <h2 className="text-3xl my-10 text-center font-bold">Please Login Here!</h2>
      <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <button className="btn btn-primary text-white">Login </button>
        </div>
      </form>
      <p className="text-center mt-4">
        Do not have an account?{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>
      </p>
      <p className="text-center my-2 font-bold">
        <button onClick={handleGoogleLogin} className="btn btn-info text-white">
         <FaGoogle></FaGoogle>
          Google
        </button>
      </p>
    </div>
  );
};

export default Login;