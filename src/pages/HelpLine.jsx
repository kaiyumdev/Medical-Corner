import React from 'react';
// import 'tailwindcss/tailwind.css';
import { FaPhoneAlt, FaCommentAlt } from 'react-icons/fa';

const Helpline = () => {
  return (
    <section className="helpline pt-24 xs:pt-18 pb-24 xs:pb-18 relative bg-customLightBlue">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div
            className="w-full lg:w-1/2 xl:w-1/2 wow fadeInLeft"
            data-wow-duration="1s"
            style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}
          >
            <div className="common_heading">
              <h5>Emergency helpline</h5>
              <h2>Need Emergency Contact</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida tempor incididu
                ut labore.
              </p>
            </div>
            <ul className="helpline_iteam list-disc pl-5">
              <li>24/7 Contact Our Hospital.</li>
              <li>24 hours Open Our Hospital.</li>
              <li>Emergency Contact Our Phone Number.</li>
            </ul>

            <ul className="flex flex-wrap mt-4 helpline_contact">
              <li className="flex items-center mr-6 mb-4">
                <span className="text-blue-500 text-xl mr-2"><FaPhoneAlt aria-hidden="true" /></span>
                <div className="helpline_contact_text">
                  <p>Phone Number</p>
                  <a href="tel:123456789" className="text-blue-500">+880 13 2525 065</a>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-blue-500 text-xl mr-2"><FaCommentAlt aria-hidden="true" /></span>
                <div className="helpline_contact_text">
                  <p>Quick Your Email</p>
                  <a href="mailto:help.info@gmail.com" className="text-blue-500">help.info@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="w-full lg:w-1/2 xl:w-5/12 wow fadeInRight"
            data-wow-duration="1s"
            style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
          >
            <div className="helpline_img">
              <img src="/images/helpline_img.png" alt="help img" className="img-fluid w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helpline;
