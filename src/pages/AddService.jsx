import React from 'react'

const AddService = () => {
    const handleSubmit = async(e) => {
        const token = localStorage.getItem('token')
        e.preventDefault()
        // alert("Are you want to add product")
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const name = form.name.value;
        const description =  form.description.value;
        const data = {title, name, image, description}

        await fetch("https://medical-corner-server.onrender.com//services", {
            method: "POST",
            headers:{ "Content-type": "application/json",  Auhthorization: `Bearer ${token}`},
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            // toast("Add Product Successfully!");
            form.reset()
        })
    }
  return (
    <div>
        <h1 className='text-5xl font-bold text-center'>Add Sercice</h1>
        <div className='my-16'>
            <form onSubmit={handleSubmit}>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="title" id="" placeholder='title'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="name" id="" placeholder='name' />
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="description" id="" placeholder='description'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="image" id="" placeholder='image'/>
                </div>
                <div className='mt-2 flex justify-center items-center'>
                    <input className='btn mt-4 w-full'  type="submit" value="Add Service" />
                </div>
                {/* <ToastContainer /> */}
            </form>
        </div>
    </div>
  )
}


export default AddService