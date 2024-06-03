import React from 'react'
import Service from './Service'

const Services = ({services}) => {
  return (
    <div>
    <h1 className="my-8 text-2xl font-bold text-center">Our Services</h1>

    <div className="flex gap-16 justify-center space-x-4 flex-wrap">
       {
        services.slice(0, 3).map((product) => <Service key={product.id} product={product}></Service>)
       }
    </div>
    
</div>
  )
}

export default Services