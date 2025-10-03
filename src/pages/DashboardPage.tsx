import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/productService'
import { IProduct } from '../models/IAllProducts'
import ProductItem from '../components/ProductItem'
import Seo from '../components/Seo'
import { useTableUser } from '../components/userTable'

function DashboardPage() {

  const userTable = useTableUser('')

  const [proArr, setProArr] = useState<IProduct[]>([])
  const [pages, setPages] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setProArr([])
    getAllProducts(currentPage).then(res => {
      const dt = res.data
      setProArr(dt.data) // async

      let pageArr:number[] = []
      const pageCountx = res.data.meta.pagination.total_pages
      for (let i = 0; i < pageCountx; i++) {
        pageArr.push(i + 1)
      }
      setPages(pageArr)

    })
  }, [currentPage])
  
  return (
    <>
      <Seo title='Products' desc='Products Description'/>
      <h2>Products</h2>

      <nav>
        <ul className="pagination pagination-sm justify-content-end">
          {pages.map((item, index) => 
            <li onClick={() => setCurrentPage(item)} key={index} className={item === currentPage ? 'page-item active' : 'page-item'}><a className="page-link" href="#">{item}</a></li>
          )}
        </ul>
      </nav>

      <div className='row'>
        {proArr.map((item, index) => 
          <div key={index} className='col-sm-3'>
            <ProductItem item={item} />
          </div>
        )}
      </div>
    </>
    
  )
}

export default DashboardPage