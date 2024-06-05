import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  console.log(serviceData)
  const { title, name, description, image } = serviceData;
  return (
    <div className=' flex justify-center'>
      <div className="card w-96 glass">
        <figure><img src={image} alt="serviceData!" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails