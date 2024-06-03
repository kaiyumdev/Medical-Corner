import React from 'react'

const Service = ({product}) => {
    const {id, image, title, name, description} = product;
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
      {/* <h3 className="text-xl font-semibold">{brand}</h3> */}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      {/* <div className="card-actions justify-end">
        <button className="btn bg-indigo-500 text-white">
          <Link to={`/products/${_id}`}>See Details</Link>
        </button>
        <button className="btn bg-green-600 text-white">
          <Link to={`/dashboard/allProducts/edit/${_id}`}>Edit</Link>
        </button>
        <button onClick={handleDelete} className="btn bg-red-500 text-white">
         Delete
        </button>
      </div> */}
    </div>
  </div>
  )
}

export default Service