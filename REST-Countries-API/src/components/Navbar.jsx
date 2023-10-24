import { BsSun } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="p-5 bg-slate-800 shadow-lg text-white h-14 justify-between flex items-center mb-6 fixed top-0 left-0 w-full z-40">
      <h2>Where in the World?</h2>
      <button>
        <BsSun />
      </button>
    </div>
  );
};

export default Navbar;
