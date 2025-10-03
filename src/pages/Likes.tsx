import React, { useEffect, useState } from 'react'
import { allLikes } from '../utils/likesStore'
import { getOneProduct } from '../services/productService'
import { IOneProduct, IProduct } from '../models/IAllProducts'
import axios from 'axios'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Likes() {

  // redux data pull
 const likesArr = useSelector((state: StateType) => state.likesReducer)

  const [proArr, setProArr] = useState<IProduct[]>([])
  useEffect(()=> {
    let arr:IProduct[] = []
    axios.all(likesArr.map((id) => getOneProduct(id))).then(ressArr => {
      ressArr.map(res => {
        arr.push(res.data.data)
      })
      setProArr(arr)
    })
  }, [likesArr])

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