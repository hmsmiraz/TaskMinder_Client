import { Link } from "react-router-dom";
import Bg from "../../assets/bg.webp";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Task <span className="text-green-500">Minder</span></h1>
          <p className="mb-5">
            Streamline Your To-Dos with Effortless Task Management
          </p>
          <Link to={'/login'}>
          <button className="btn btn-primary text-white font-bold">Lets Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
