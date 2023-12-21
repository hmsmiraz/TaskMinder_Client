import Bankers from "../../assets/Bankers.jpg";
import Students from "../../assets/stu.jpg";
import Employee from "../../assets/em.jpg";
const WhoCanUse = () => {
  return (
    <div className="my-4">
      <div className="mx-auto text-center my-8 md:w-4/12 font-medium">
        <h2 className="text-3xl py-4 uppercase border-y-4 border-primary">
          Who can use this?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-4">
        {/* 1st */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Bankers} alt="Bankers" />
          </figure>
          <div className="card-body flex items-center justify-center mt-10">
            <h2 className="card-title font-bold uppercase">Bankers</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Students} alt="Students" />
          </figure>
          <div className="card-body flex items-center justify-center mt-10">
            <h2 className="card-title font-bold uppercase">Students</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        {/* 3rd */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Employee} alt="Employee" />
          </figure>
          <div className="card-body flex items-center justify-center mt-10">
            <h2 className="card-title font-bold uppercase">Employee</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;
