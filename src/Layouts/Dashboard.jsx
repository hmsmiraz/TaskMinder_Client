import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlus, FaRegListAlt } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-green-600">
        <ul className="menu p-4 text-blue-900">
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addtask"}>
              <FaPlus></FaPlus> Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allTask"}>
              <FaRegListAlt></FaRegListAlt> All Task
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
