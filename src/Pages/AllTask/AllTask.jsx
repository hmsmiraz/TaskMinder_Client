import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTask from "../../Hooks/useTasks";
import Swal from "sweetalert2";
const AllTask = () => {
  const [tasks, , refetch] = useTask();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const email = user?.email;
  const filteredTask = tasks.filter((task) => task.email == email);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/tasks/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.title} request has been deleted!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className=" text-3xl font-bold text-center"> All Your Task Here</h2>

      <div className="my-5">
        <div className="overflow-x-auto mx-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTask.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.deadline}</td>
                  <td>{item.priority}</td>
                  <td>{item.status}</td>
                  <td>
                      <button className="text-blue-500 text-lg">
                        <FaEdit></FaEdit>
                      </button>
                    </td>
                    <td>
                      <button className="text-red-500 text-lg" onClick={() => handleDelete(item)}>
                        <FaTrash></FaTrash>
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
