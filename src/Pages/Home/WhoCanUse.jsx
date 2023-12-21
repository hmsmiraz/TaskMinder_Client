import Bankers from "../../assets/Bankers.jpg";
import Students from "../../assets/stu.jpg";
import Employee from "../../assets/em.jpg";
const WhoCanUse = () => {
  return (
    <div className="my-4">
      <div className="mx-auto text-center my-8 md:w-4/12 font-medium">
        <h2 className="text-xl font-bold uppercase py-4  border-y-4 border-primary">
          Use this for boost your productivity 
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-4">
        {/* 1st */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Bankers} alt="Bankers" />
          </figure>
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title font-bold uppercase text-4xl">Bankers</h2>
          </div>
        </div>
        {/* 2nd */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Students} alt="Students" />
          </figure>
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title font-bold uppercase text-4xl">Students</h2>
          </div>
        </div>
        {/* 3rd */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Employee} alt="Employee" />
          </figure>
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title font-bold uppercase text-4xl">Employee</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;
