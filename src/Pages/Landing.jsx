import React,{useContext} from 'react'
import { Hero, Nav, ProductCard } from '../Components/index'
import { ProductDetails } from '../context/ProductContext'

const Landing = () => {
    const {products} = useContext(ProductDetails)

  return (
    <div className='w-full h-full'>
      <Nav/>
        <Hero/>
       
        <ProductCard  />
        
      
    </div>
  )
}

export default Landing
