import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditService = () => {
    const editService = useLoaderData()
    console.log(editService)

    const [title, setTitle] = useState(editService.title)
    const [name, setName] = useState(editService.name)
    const [description, setDescription] = useState(editService.description)
    const [image, setImage] = useState(editService.image)

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault()
        // alert("Are you want to Edit shoe")
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const data = {title, name, description, image }
        await fetch(`https://medical-corner-server.onrender.com/services/${editService._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json", 
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            toast("Edit service successfully!");
        })
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Edit Product</h1>
            <div className='my-16'>
                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                        <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="" placeholder='title' />
                    </div>
                    <div className='mt-2'>
                        <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="" placeholder='name' />
                    </div>
                    <div className='mt-2'>
                        <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="" placeholder='description' />
                    </div>
                    <div className='mt-2'>
                        <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" id="" placeholder='image' />
                    </div>
                    <div className='mt-2 flex justify-center items-center'>
                        <input className='btn mt-4 w-full' type="submit" value="Edit Service" />
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default EditService