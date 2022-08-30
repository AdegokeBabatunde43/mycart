import React from 'react'
import Item from './Item';
import data from './data';

const Home = () => {
    console.log(data.productData)
  return (
    <>
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='py-4 container ' >
        <div className='row justify-content-center'>
            {data.productData.map((item, id) => {
                return(
                    <Item key={id} img={item.img} title={item.title} price={item.price} desc={item.desc} item={item} />
                )
                    
})}
            
        </div>

      </section>
    </>
  )
}

export default Home
