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

  const Incomplete = "Incomplete";
  const IncompleteTask = filteredTask.filter(
    (task) => task.priority == Incomplete
  );
  const ToDO = "ToDO";
  const ToDOTask = filteredTask.filter((task) => task.priority == ToDO);
  const Doing = "Doing";
  const DoingTask = filteredTask.filter((task) => task.priority == Doing);
  const UnderReview = "UnderReview";
  const UnderReviewTask = filteredTask.filter(
    (task) => task.priority == UnderReview
  );
  const Completed = "Completed";
  const CompletedTask = filteredTask.filter(
    (task) => task.priority == Completed
  );
  const OverDraft = "OverDraft";
  const OverDraftTask = filteredTask.filter(
    (task) => task.priority == OverDraft
  );
  console.log("IncompleteTask", IncompleteTask);
  console.log("ToDOTask", ToDOTask);
  console.log("DoingTask", DoingTask);
  console.log("UnderReviewTask", UnderReviewTask);
  console.log("CompletedTask", CompletedTask);
  console.log("OverDraftTask");

  // const handleDelete = (item) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const res = await axiosPublic.delete(`/tasks/${item._id}`);
  //       console.log(res.data);
  //       if (res.data.deletedCount > 0) {
  //         refetch();
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: `${item.title} request has been deleted!`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     }
  //   });
  // };
  return (
    <div>
      <h2 className=" text-3xl font-bold text-center"> All Your Task Here</h2>
      <div className="flex my-5 gap-2">
        {/* 1 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
