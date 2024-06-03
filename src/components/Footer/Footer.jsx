import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer_bg.jpg')] mt-14 bg-cover bg-center">
      <div className="container mx-auto p-6">
        <div className="wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
          <div className="subscription">
            <div className="flex justify-between items-center">
              <div className="flex-1 pr-4">
                <div className="subscribe_text">
                  <h2>Subscribe for the Exclusive Updates!</h2>
                </div>
              </div>
              <div className="flex-1">
                <form action="#" className="subscrib_form flex">
                  <input type="text" placeholder="your Email Address" className="border border-gray-300 p-2 rounded-l-lg focus:outline-none" />
                  <button className="common_btn subscrib_btn bg-blue-500 text-white p-2 rounded-r-lg">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          <div className="footer_left">
            <a href="index.html" className="tf_footer_logo">
              <img src="/images/footer_logo.png" alt="MediFax" className="img-fluid w-100 my-5" />
            </a>
            <p>There are popular beliefs that Lorem Ipsum is not simply random text.</p>
            <div className="footer_mail">
              <span>Hello to :</span>
              <a href="mailto:support@gmail.com">support@gmail.com</a>
            </div>
            <div className="tf_footer_icon flex items-center mt-4">
              <span>Follow :</span>
              <ul className="flex ml-2">
                <li className="mx-2"><a href="#"><FaFacebookF aria-hidden="true" /></a></li>
                <li className="mx-2"><a href="#"><FaTwitter aria-hidden="true" /></a></li>
                <li className="mx-2"><a href="#"><FaPinterestP aria-hidden="true" /></a></li>
                <li className="mx-2"><a href="#"><FaLinkedinIn aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>

          <div className="quick_link">
            <h5>Company</h5>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="service.html">Our Service</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div className="quick_link">
            <h5>Important</h5>
            <ul>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms_condition.html">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="quick_link">
            <h5>Quick Link</h5>
            <ul>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="pricing.html">Pricing Plan</a></li>
              <li><a href="blog.html">News & Articles</a></li>
              <li><a href="sign_up.html">Login</a></li>
              <li><a href="#">Subscribe</a></li>
            </ul>
          </div>

          <div className="address">
            <h5>Official Info</h5>
            <div className="tf_footer_address">
              <p>
                <FaMapMarkerAlt aria-hidden="true" className="inline mr-2" />
                2767 Sunrise Street, NY 1002, USA
              </p>
              <a href="mailto:company@gmail.com">
                <FaEnvelope aria-hidden="true" className="inline mr-2" />
                company@gmail.com
              </a>
              <a href="tel:+965548547564">
                <FaPhoneAlt aria-hidden="true" className="inline mr-2" />
                +965548547564
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 xs:mt-11 sm:mt-6">
          <div className="copyright flex justify-between">
            <p>2023 MadiFax. All rights reserved.</p>
            <ul className="flex">
              <li className="mx-2"><a href="terms_condition.html">Terms and Conditions</a></li>
              <li className="mx-2"><a href="#">Cookies</a></li>
              <li className="mx-2"><a href="privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react';
// import 'tailwindcss/tailwind.css';
// import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[url('/images/footer_bg.jpg')] mt-14 bg-cover bg-center">
//       <div className="container mx-auto p-6">
//         <div className="row">
//           <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
//             <div className="subscription">
//               <div className="row justify-between items-center">
//                 <div className="col-xxl-6 col-lg-6 col-xl-7">
//                   <div className="subscribe_text">
//                     <h2>Subscribe for the Exclusive Updates!</h2>
//                   </div>
//                 </div>
//                 <div className="col-xxl-5 col-lg-6 col-xl-5">
//                   <form action="#" className="subscrib_form flex">
//                     <input type="text" placeholder="your Email Address" className="border border-gray-300 p-2 rounded-l-lg focus:outline-none" />
//                     <button className="common_btn subscrib_btn bg-blue-500 text-white p-2 rounded-r-lg">Subscribe</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-2.5">
//           <div className="col-lg-3 col-sm-9 col-md-6">
//             <div className="footer_left">
//               <a href="index.html" className="tf_footer_logo">
//                 <img src="/images/footer_logo.png" alt="MediFax" className="img-fluid w-100" />
//               </a>
//               <p>There are popular beliefs that Lorem Ipsum is not simply random text.</p>
//               <div className="footer_mail">
//                 <span>Hello to :</span>
//                 <a href="mailto:support@gmail.com">support@gmail.com</a>
//               </div>
//               <div className="tf_footer_icon flex items-center">
//                 <span>Follow :</span>
//                 <ul className="flex">
//                   <li className="mx-2"><a href="#"><FaFacebookF aria-hidden="true" /></a></li>
//                   <li className="mx-2"><a href="#"><FaTwitter aria-hidden="true" /></a></li>
//                   <li className="mx-2"><a href="#"><FaPinterestP aria-hidden="true" /></a></li>
//                   <li className="mx-2"><a href="#"><FaLinkedinIn aria-hidden="true" /></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-2 col-sm-6 col-md-4">
//             <div className="quick_link">
//               <h5>Company</h5>
//               <ul>
//                 <li><a href="index.html">Home</a></li>
//                 <li><a href="about.html">About Us</a></li>
//                 <li><a href="service.html">Our Service</a></li>
//                 <li><a href="team.html">Our Team</a></li>
//                 <li><a href="contact.html">Contact Us</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-2 col-sm-6 col-md-3">
//             <div className="quick_link">
//               <h5>Important</h5>
//               <ul>
//                 <li><a href="#">Our Process</a></li>
//                 <li><a href="#">Appointment</a></li>
//                 <li><a href="faq.html">FAQ</a></li>
//                 <li><a href="privacy.html">Privacy Policy</a></li>
//                 <li><a href="terms_condition.html">Terms & Conditions</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-2 col-sm-6 col-md-3">
//             <div className="quick_link">
//               <h5>Quick Link</h5>
//               <ul>
//                 <li><a href="#">Why Choose Us</a></li>
//                 <li><a href="pricing.html">Pricing Plan</a></li>
//                 <li><a href="blog.html">News & Articles</a></li>
//                 <li><a href="sign_up.html">Login</a></li>
//                 <li><a href="#">Subscribe</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-3 col-sm-6 col-md-6 order-md-2">
//             <div className="address">
//               <h5>Official Info</h5>
//               <div className="tf_footer_address">
//                 <p>
//                   <FaMapMarkerAlt aria-hidden="true" className="inline mr-2" />
//                   2767 Sunrise Street, NY 1002, USA
//                 </p>
//                 <a href="mailto:company@gmail.com">
//                   <FaEnvelope aria-hidden="true" className="inline mr-2" />
//                   company@gmail.com
//                 </a>
//                 <a href="tel:+965548547564">
//                   <FaPhoneAlt aria-hidden="true" className="inline mr-2" />
//                   +965548547564
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-16 xs:mt-11 sm:margin">
//           <div className="col-xl-12">
//             <div className="copyright flex justify-between">
//               <p>2023 MadiFax. All rights reserved.</p>
//               <ul className="flex">
//                 <li className="mx-2"><a href="terms_condition.html">Terms and Conditions</a></li>
//                 <li className="mx-2"><a href="#">Cookies</a></li>
//                 <li className="mx-2"><a href="privacy.html">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
