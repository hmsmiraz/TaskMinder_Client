import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("Incomplete");
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      deadline,
      status,
      priority,
      email,
    };
    console.log(taskData);
    const result = await axiosPublic.post("/tasks", taskData);
    if (result.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${title} add to DB.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTitle("");
      setDescription("");
      setDeadline("");
      setStatus("Incomplete");
      setPriority("Low");
    }
  };
  return (
    <div className="mx-3">
      <h2 className="text-3xl my-10 text-center font-bold">Add a Task!</h2>
      <div className="max-w-md mx-auto mt-6 p-4 border border-gray-300 rounded-md my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="textarea textarea-secondary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-secondary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="textarea textarea-secondary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="textarea textarea-secondary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="textarea textarea-secondary mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
