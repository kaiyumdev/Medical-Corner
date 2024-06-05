import React, { useEffect, useState } from 'react'
import SingleService from './SingleService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllServices = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then((res) => res.json())
    .then((data) => setServices(data))
},[])

const handleDeleteService = (id) => {
  setServices(services.filter((service) => service._id !==id))
    toast("Delete shoe successfully!");
}
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
      <div>
        {/* <ToastContainer /> */}
      </div>
      {
        services?.map((service) => <SingleService key={service._id} service={service} onDelete={handleDeleteService}></SingleService>)
      }
      <div>

      </div>
    </div>
  )
}

export default AllServices