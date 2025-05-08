import img1 from "../../Assets/Card/img1.avif";
import img2 from "../../Assets/Card/img2.avif";
import img3 from "../../Assets/Card/img3.avif";

export default function Card() {
  return (
    <>
     <div className="   h-fit mt-20 mx-5 flex flex-row justify-start lg:justify-center items-center gap-x-5 overflow-x-auto lg:overflow-x-hidden">
  {/* Card 1 */}
  <div className="   h-fit relative flex-shrink-0">
    <img className="w-64 sm:w-72 md:w-80 lg:w-96 object-cover" src={img1} alt="card" />
    <button className="py-2 px-4 sm:px-5 text-sm sm:text-base absolute bottom-6 left-6   bg-gray-100 rounded-full">
      Shop Basketball
    </button>
  </div>

  {/* Card 2 */}
  <div className="   h-fit relative flex-shrink-0">
    <img className="w-64 sm:w-72 md:w-80 lg:w-96 object-cover" src={img2} alt="card" />
    <button className="py-2 px-4 sm:px-5 text-sm sm:text-base absolute bottom-6 left-6  bg-gray-100 rounded-full">
      Shop Training
    </button>
  </div>

  {/* Card 3 */}
  <div className="   h-fit relative flex-shrink-0">
    <img className="w-64 sm:w-72 md:w-80 lg:w-96 object-cover" src={img3} alt="card" />
    <button className="py-2 px-4 sm:px-5 text-sm sm:text-base absolute bottom-6 left-6   bg-gray-100 rounded-full">
      Shop Golf
    </button>
  </div>
</div>




    </>
  );
}
