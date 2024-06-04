import React, { useEffect, useState } from 'react'
import SingleService from './SingleService';

const AllServices = () => {
    const [services, setServices] = useState();

    useEffect(() =>{
        fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[])


    const handleDeleteService = (id) => {
      setServices(services.filter((service) => service.id !==id))
      // toast("Delete shoe successfully!");
  }
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
    <div>
    {/* <ToastContainer /> */}
    </div>
    {
        services?.map((service) => <SingleService key={service.id} service={service} onDelete={handleDeleteService}></SingleService>)
    }
    <div>
   
    </div>
</div>
  )
}

export default AllServices