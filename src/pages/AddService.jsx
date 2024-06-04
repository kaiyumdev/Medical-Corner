import React from 'react'

const AddService = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        // alert("Are you want to add product")
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const name = form.name.value;
        const description =  form.description.value;
        const id = form.id.value;
        const data = {title, name, image, description, id}

        await fetch("http://localhost:3000/services", {
            method: "POST",
            headers:{ "Content-type": "application/json"},
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
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="id" id="" placeholder='id'/>
                </div>
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