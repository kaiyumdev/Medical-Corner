import React from 'react'
import Service from './Service'

const Services = ({ services }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center my-5 p-8"
    style={{ backgroundImage: `url('/images/services/service_bg.jpg')` }}>
      <h1 className="my-8 text-2xl font-bold text-center">Our Services</h1>

      <div className="flex gap-16 justify-center space-x-4 flex-wrap">
        {
          services.map((service) => <Service key={service._id} service={service}></Service>)
        }
      </div>

    </div>
  )
}

export default Services