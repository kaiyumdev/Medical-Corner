import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();
    console.log(serviceDetail)
    const {title, name, description, image} = serviceDetail;
  return (
    <div className=' flex justify-center'>
        <div className="card w-96 glass">
  <figure><img src={image} alt="service!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    </div>
  )
}

export default ServiceDetails