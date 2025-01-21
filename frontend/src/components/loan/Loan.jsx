import { FaHeadSideVirus } from "react-icons/fa";
import { TbDeviceMobileShare } from "react-icons/tb";

function Loan() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row px-16 py-10">
      <div className="imgWrapper w-full sm:w-6/12">
        <img
          src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="content  w-full sm:w-6/12 flex flex-col gap-10 ">
        <div className="flex items-center  gap-5">
          <FaHeadSideVirus className="text-6xl text-orange-500" />
          <div className="text flex flex-col gap-3 items-start">
            <h3 className="text-3xl font-bold">Bank Loan</h3>
            <p className="text-xl text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="text-orange-500 font-bold">Learn More</button>
          </div>
        </div>
        <div className="flex items-center  gap-5">
          <TbDeviceMobileShare className="text-6xl text-orange-500" />
          <div className="text flex flex-col gap-3 items-start">
            <h3 className="text-3xl font-bold">Banking Consulation</h3>
            <p className="text-xl text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="text-orange-500 font-bold">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan;
