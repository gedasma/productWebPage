import ProductListItem from "../productListItem/ProductListItem"
import { getProductPage } from "../../services/productService"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ProductList = ()=>{
    let {id} = useParams()

    const [pageData, setPageData] = useState()
    const [pageArray, setPageArray] = useState()

    if(!id){
        id = 1
    }
    
    useEffect(()=>{
        if(pageData){
            if(!pageArray){
                setPageArray(Array.from({ length: pageData.data.last_page }, (_, index) => index + 1))
            }
        }
    }, [pageData])

    useEffect(()=>{
        getProductPage(id).then(data=>setPageData(data))
    }, [id])
    
    return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {pageData? 
                pageData.data.data.map((productData)=>
                    <ProductListItem key = {productData.id} productData = {productData}/>
                )
                :
                <div>Loading...</div>
            }
        </div>
        <div>
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <Link className={id == 1? "page-link disabled" : "page-link"} to={`/products/${parseInt(id) - 1}`}>Previous</Link>
                </li>
                    {pageArray?
                    pageArray.map((pageNumber)=>
                        <li key={pageNumber} className={id == pageNumber? "page-item active" : "page-item"}><Link className="page-link" to={`/products/${pageNumber}`}>{pageNumber}</Link></li>
                        )
                    :
                    <></>
                    }
                <li className="page-item">
                    <Link className={pageArray && id == pageArray.length? "page-link disabled" : "page-link"} to={`/products/${parseInt(id) + 1}`}>Next</Link>
                </li>             
            </ul>
        </nav>
        </div>
    </div>
</section>

    )
}

export default ProductList