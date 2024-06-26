import React from 'react'
import { Link } from 'react-router-dom';

const SingleService = ({service, onDelete}) => {
  const token = localStorage.getItem('token')
    const {_id, title, image, name, description} = service;

    const handleDelete = async() => {
      // alert("Ary you want to delete this?")
      await fetch(`https://medical-corner-server.onrender.com/services/${_id}`, {
        method:"DELETE",
        headers:{ "Content-type": "application/json",  authorization: `Bearer ${token}`},
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        onDelete(_id)
      })
    }

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <figure>
        <img
          src={image}
          alt="Shoes"
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
          <button className="btn bg-green-600 text-white">
            <Link to={`/dashboard/allService/edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
           Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleService