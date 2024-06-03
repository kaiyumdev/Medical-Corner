import React from 'react';

const About = () => {
    return (
        <section className="pt-24 xs:pt-16 pb-24 xs:pb-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full xl:w-1/2 sm:w-9/12 lg:w-5/12 md:w-7/12 relative animate-fadeInLeft" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}>
                        <div className="relative">
                            <div className="mb-4 relative">
                                <img src="images/about-img1.jpg" alt="about img" className="img-fluid w-1/2" />
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <img src="images/about_img2.jpg" alt="about img" className="img-fluid w-1/2 transform translate-x-1/4 translate-y-1/4" />
                                    <a className="absolute inset-0 flex items-center justify-center play_btn venobox vbox-item" data-autoplay="true" data-vbtype="video" href="https://youtu.be/nqye02H_H6I">
                                        <i className="fas fa-play text-white" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 sm:w-full lg:w-7/12 animate-fadeInRight" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
                        <div>
                            <h5 className="text-primary">About Us</h5>
                            <h2 className="text-3xl font-bold mb-4">The Great Place of Medical Hospital Center.</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida tempor incididu ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
                            </p>
                        </div>

                        <ul className="flex flex-wrap mb-6">
                            <li className="mr-4 mb-2">Ambulance Services</li>
                            <li className="mr-4 mb-2">Oxizen on Wheel</li>
                            <li className="mr-4 mb-2">Pharmacy on Clinic</li>
                            <li className="mr-4 mb-2">On duty Doctors</li>
                            <li className="mr-4 mb-2">24/7 Medical Emergency</li>
                        </ul>
                        <a href="about.html" className="btn btn-primary">Discover More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


// import React from 'react';

// const About = () => {
//     return (
//         <section className="pt-24 xs:pt-16 pb-24 xs:pb-16">
//             <div className="container mx-auto">
//                 <div className="flex flex-wrap justify-center items-center">
//                     <div className="w-full xl:w-1/2 sm:w-9/12 lg:w-5/12 md:w-7/12 animate-fadeInLeft" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}>
//                         <div className="relative">
//                             <div className="mb-4">
//                                 <img src="images/about-img1.jpg" alt="about img" className="img-fluid w-full" />
//                             </div>
//                             <div className="relative z-10">
//                                 <img src="images/about_img2.jpg" alt="about img" className="img-fluid w-full" />
//                                 <a className="absolute inset-0 flex items-center justify-center play_btn venobox vbox-item" data-autoplay="true" data-vbtype="video" href="https://youtu.be/nqye02H_H6I">
//                                     <i className="fas fa-play text-white" aria-hidden="true"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full xl:w-1/2 sm:w-full lg:w-7/12 animate-fadeInRight" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
//                         <div>
//                             <h5 className="text-primary">About Us</h5>
//                             <h2 className="text-3xl font-bold mb-4">The Great Place of Medical Hospital Center.</h2>
//                             <p className="mb-6">
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida tempor incididu ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
//                             </p>
//                         </div>

//                         <ul className="flex flex-wrap mb-6">
//                             <li className="mr-4 mb-2">Ambulance Services</li>
//                             <li className="mr-4 mb-2">Oxizen on Wheel</li>
//                             <li className="mr-4 mb-2">Pharmacy on Clinic</li>
//                             <li className="mr-4 mb-2">On duty Doctors</li>
//                             <li className="mr-4 mb-2">24/7 Medical Emergency</li>
//                         </ul>
//                         <a href="about.html" className="btn btn-primary">Discover More</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
