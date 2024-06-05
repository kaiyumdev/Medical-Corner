import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {_id, title, name, description, image} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <figure>
        <img
          src={image}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/services/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service