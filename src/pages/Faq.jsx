import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            question: 'How can I book an appointment?',
            answer: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            question: 'Do you offer emergency services?',
            answer: 'Yes, we provide 24/7 emergency services. Our team is always ready to assist you in case of any medical emergency.'
        },
        {
            question: 'Where are you located?',
            answer: 'We are located at 123 Medical Center Blvd, City, State, Zip Code. You can find more details on our contact page.'
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                            <h4
                                className="text-xl font-semibold mb-2 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                            </h4>
                            {activeIndex === index && <p className="text-gray-600">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <img src="/images/faq-img.jpg" alt="FAQ" className="img-fluid w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Faq;

// import React from 'react';

// const Faq = () => {
//     return (
//         <section className="faq py-24 xs:py-16">
//             <div className="container mx-auto">
//                 <div className="flex flex-wrap">
//                     <div className="w-full lg:w-1/2 px-4">
//                         <div className="common_heading center_heading mb-25">
//                             <h5>FAQ</h5>
//                             <h2>Frequently Asked Questions</h2>
//                         </div>
//                         <div className="faq_accordion accordion accordion-flush" id="accordionFlushExample">
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header" id="flush-headingOne">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                                         What Happens To My Sample Once I Have Provided It?
//                                     </button>
//                                 </h2>
//                                 <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                                     <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
//                                 </div>
//                             </div>
//                             {/* Repeat similar structure for other FAQs */}
//                         </div>
//                     </div>
//                     <div className="w-full lg:w-1/2 px-4">
//                         <div className="faq_img">
//                             <img src="images/faq-img.jpg" alt="faq" className="img-fluid w-full" />
//                             <a className="play_btn venobox vbox-item" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=i_glB8n4KLE&amp;list=PPSV">
//                                 <i className="fas fa-play" aria-hidden="true"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Faq;

