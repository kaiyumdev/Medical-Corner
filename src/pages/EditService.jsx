import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const EditService = () => {
    const editService = useLoaderData()

    const [id, setId] = useState(editService.id)
    const [title, setTitle] = useState(editService.title)
    const [name, setName] = useState(editService.name)
    const [description, setDescription] = useState(editService.description)
    const [image, setImage] = useState(editService.image)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // alert("Are you want to Edit shoe")
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const data = {id, title, name, description, image }
        await fetch(`http://localhost:3000/services/${editService.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            // toast("Edit shoes successfully!");
        })
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Edit Product</h1>
            <div className='my-16'>
                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                        <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={id} onChange={(e) => setId(e.target.value)} type="text" name="id" id="" placeholder='id' />
                    </div>
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
                    {/* <ToastContainer /> */}
                </form>
            </div>
        </div>
    )
}

export default EditService