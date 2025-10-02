import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneProduct } from '../services/productService'
import { IProduct } from '../models/IAllProducts'

function ProductDetail() {

  const params = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState<IProduct>()
  const [bigImage, setBigImage] = useState('')
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    const id = Number(params.id)
    if (Number.isInteger(id) && id > -1) {
        getOneProduct(id).then(res => {
            const dt = res.data
            setItem(dt.data)
            setBigImage(dt.data.images[0])
        }).catch(err => {
            navigate('/dashboard')
        })
    }else {
        navigate('/dashboard')
    }
  }, [])
  

  return (
    <>
    { item &&
        <>
        <div className='row'>
            <div className='col-sm-6'>
                <h2>{item.title}</h2>
                <h3>{item.price}₺</h3>
                <p><span className="badge text-bg-warning">{item.category}</span></p>
                <i onClick={() => setIsLike(!isLike)} className={isLike ? 'bi bi-hand-thumbs-up-fill fs-3 text-danger' : 'bi bi-hand-thumbs-up fs-3 text-danger'}></i>
                <p>{item.description}</p>
            </div>
            <div className='col-sm-6'>
                <img src={bigImage} className='img-fluid' />
                <hr />
                {item.images.map((img, index) => 
                    <img role='button' key={index} onClick={() => setBigImage(img)} src={img} className='img-thumbnail m-1' width={99} />
                )}
            </div>
        </div>
        </>
    }
    </>
  )
}

export default ProductDetail