import React, { useEffect, useState } from 'react'
import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState();

    useEffect(() =>{
        fetch("http://localhost:3000/services")
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[])
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
    <div>
    <ToastContainer />
    </div>
    {
        products?.map((service) => <SingleService key={service._id} service={service} onDelete={handleDeleteProduct}></SingleService>)
    }
    <div>
   
    </div>
</div>
  )
}

export default AllServices