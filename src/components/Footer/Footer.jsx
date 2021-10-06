import React from "react";

export default function Footer() {
  return (
    <div className="z-10 relative">
      <footer className="footer bg-pink-900 relative pt-1 ">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-4">
            <div
              className="
                mt-8
                sm:mt-0 sm:w-full sm:px-8
                flex flex-col
                md:flex-row
                justify-between
              "
            >
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase text-lg mb-2">
                  Visit Us
                </span>
                <div className="flex flex-col">
                  <div>
                    <i class="fas fa-map-marker-alt text-blue-900"></i>{" "}
                    <a href="https://goo.gl/maps/aEohoyH9H1Ghw7xJ7" target="_blank"><span className="text-white">
                      177 Lane No 2, Dhaka 1206
                    </span></a>
                  </div>
                  <div>
                    <i class="fas fa-globe-americas text-blue-900"></i>{" "}
                    <a href="http://www.dsinnovators.com/" target="_blank"><span className="text-white">
                      www.dsinnovators.com
                    </span></a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                  Find Us
                </span>
                <div className="flex flex-row justify-around items-center text-lg sm:text-2xl text-blue-300  h-full">
                  <a href="https://www.facebook.com/DynamicSolutionInnovators" target="_blank"><i class="fab fa-facebook-square hover:text-blue-900"></i></a>
                  <a href="https://www.linkedin.com/company/dsinnovators/" target="_blank"><i class="fab fa-linkedin hover:text-blue-900"></i></a>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase text-lg mt-4 md:mt-0 mb-2 text-left">
                  Contact Us
                </span>
                <div className="flex flex-col">
                  <div>
                    <i class="fas fa-phone text-blue-900"></i>{" "}
                    <a href="tel:02-9887041" target="_blank"><span className="text-white">
                     02-9887041
                    </span></a>
                  </div>
                  <div>
                    <i class="fas fa-envelope text-blue-900"></i>{" "}
                    <a href="mailto:info@dsinnovators.com" target="_blank"><span className="text-white">
                       info@dsinnovators.com
                    </span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-2 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-2">
              <p className="text-sm text-blue-100 font-bold mb-2">
                © 2018 Dynamic Solution Innovators Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
