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

  const handleComplete = (item) => {
    axiosPublic.patch(`/tasks/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${item.title} is completed!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

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
                <th>Edit</th>
                <th>Delete</th>
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
                  <td>
                    {item?.status === "Incomplete" ? (
                      <button
                        onClick={() => handleComplete(item)}
                        className="tooltip text-yellow-800 btn"
                        data-tip="Mark as complete"
                      >
                        Incomplete
                      </button>
                    ) : (
                      <p>Complete</p>
                    )}
                  </td>
                  <td>
                    <button className="text-blue-500  btn">
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn text-red-500"
                      onClick={() => handleDelete(item)}
                    >
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
