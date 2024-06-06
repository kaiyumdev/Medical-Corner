import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://medical-corner-server.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service._id !== id));
    toast("Delete service successfully!");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-8"
      style={{ backgroundImage: `url('/images/services/service_bg.jpg')` }}
    >
      <div>
        <ToastContainer />
      </div>
      <div className='w-full flex justify-center my-4'>
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={handleSearchChange}
          className='border p-5 rounded'
        />
      </div>
      <div className='flex justify-center gap-16 flex-wrap w-full'>
        {
          filteredServices.map((service) => (
            <SingleService key={service._id} service={service} onDelete={handleDeleteService} />
          ))
        }
      </div>
    </div>
  );
};

export default AllServices;
