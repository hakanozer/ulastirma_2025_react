import React, { useEffect, useState } from 'react'
import { allLikes } from '../utils/likesStore'
import { getOneProduct } from '../services/productService'
import { IOneProduct, IProduct } from '../models/IAllProducts'
import axios from 'axios'
import ProductItem from '../components/ProductItem'

function Likes() {

  const [proArr, setProArr] = useState<IProduct[]>([])
  useEffect(()=> {
    let arr:IProduct[] = []
    axios.all(allLikes().map((id) => getOneProduct(id))).then(ressArr => {
      ressArr.map(res => {
        arr.push(res.data.data)
      })
      setProArr(arr)
    })
  }, [])

  return (
    <>
      <div className='row'>
        <h2>Likes</h2>
        {proArr.map((item, index) => 
          <div key={index} className='col-sm-3'>
            <ProductItem item={item} />
          </div>
        )}
      </div>
    </>
  )
}

export default Likes