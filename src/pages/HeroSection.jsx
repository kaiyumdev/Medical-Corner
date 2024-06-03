import React from 'react'
const HeroSection = () => {
    return (
        <div className="bg-[url('/images/banner_bg.jpg')]">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/banner_img.png" className="max-w-sm rounded-lg shadow-2xl fadeInRight " />
                    <div>
                        <h1 className="text-5xl font-bold">We Are Committed To Your Health</h1>
                        <p className="py-6">It is a established fact that a reader will be distracted by the content of a page when looking at this layout.</p>
                        <button className="btn btn-primary">Meet A Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection