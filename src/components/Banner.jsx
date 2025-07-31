import { FaHeart } from "react-icons/fa";
import img from "../assets/download.jpeg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <section className="bg-contain bg-fixed py-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 max-w-6xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-xl p-6">
        {/* Left Side Text */}
        <div className="space-y-4 text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold">
            Save Lives Through{" "}
            <span className="text-red-600">Blood Donation</span>
          </h2>
          <p className="text-gray-600">
            Connect with blood donors in your area and help save lives. Join our
            community of heroes making a difference one donation at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <Link to='/registration' className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 flex items-center gap-2 shadow-md">
              <FaHeart className="text-white animate-pulse" />
              Become a Donor
            </Link>
            <Link to='/available-food' className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition duration-300">
              Find Blood Donors
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 max-w-sm w-full">
          <img
            src={img}
            alt="Blood Donation"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
