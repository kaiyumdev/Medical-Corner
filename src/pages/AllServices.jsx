// import React, { useEffect, useState } from 'react'
// import SingleService from './SingleService';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AllServices = () => {
//   const [services, setServices] = useState();

//   useEffect(() => {
//     fetch("https://medical-corner-server.onrender.com//services")
//     .then((res) => res.json())
//     .then((data) => setServices(data))
// },[])

// const handleDeleteService = (id) => {
//   setServices(services.filter((service) => service._id !==id))
//     toast("Delete shoe successfully!");
// }
//   return (
//     <div className='flex justify-center gap-16 flex-wrap'>
//       <div>
//         <ToastContainer />
//       </div>
//       {
//         services?.map((service) => <SingleService key={service._id} service={service} onDelete={handleDeleteService}></SingleService>)
//       }
//       <div>

//       </div>
//     </div>
//   )
// }

// export default AllServices


import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://medical-corner-server.onrender.com//services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service._id !== id));
    toast("Delete shoe successfully!");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex justify-center gap-16 flex-wrap'>
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
      {
        filteredServices.map((service) => (
          <SingleService key={service._id} service={service} onDelete={handleDeleteService} />
        ))
      }
    </div>
  );
};

export default AllServices;
