import icon from "../../Assets/icons.png";

export default function Lastfooter() {
  return (
    <>
      <div className="bg-gray-50 py-6 px-4 sm:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:justify-center items-center text-sm text-gray-600">
      {/* Copyright */}
      <p>© 2025 Nike, Inc. All Rights Reserved</p>
      
      {/* Guides Dropdown */}
      <div className="group relative">
        <button className="hover:text-gray-900 flex items-center gap-1 transition-colors">
          Guides
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40">
          <ul className="flex flex-col py-2 bg-white border border-gray-200 rounded-md shadow-lg w-60">
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Air</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Air Force 1</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Air Max</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike FlyEase</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Flyknit</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Free</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike React</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike Vaporfly</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Nike ZoomX</li>
            <li className="hover:bg-gray-100 px-4 py-2 transition-colors duration-150">Space Hippie</li>
          </ul>
        </div>
      </div>
      
      {/* Other Links */}
      <a href="#" className="hover:text-gray-900 transition-colors">Terms of Sale</a>
      <a href="#" className="hover:text-gray-900 transition-colors">Nike Privacy Policy</a>
      <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
      
      {/* Privacy Choices */}
      <div className="flex items-center gap-2 hover:text-gray-900 transition-colors">
        <img src={icon} alt="Privacy icon" className="h-4 w-4" />
        <a href="#">Your Privacy Choices</a>
      </div>
      
      {/* CA Supply Chains Act */}
      <a href="#" className="hover:text-gray-900 transition-colors">CA Supply Chains Act</a>
    </div>
  </div>
</div>
    </>
  );
}
