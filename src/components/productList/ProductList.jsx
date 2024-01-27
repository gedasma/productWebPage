import ProductListItem from "../productListItem/ProductListItem"
import { getProductPage } from "../../services/productService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductList = ()=>{

    let {id} = useParams()

    const [pageData, setPageData] = useState()
    const [pageArray, setPageArray] = useState()

    if(!id){
            id = 1
        }

    if(!pageData){ 
            getProductPage(id).then(data=>setPageData(data))
        }
    
    useEffect(()=>{
        if(pageData){
            if(!pageArray){
                setPageArray(Array.from({ length: pageData.data.last_page }, (_, index) => index + 1))
            }
        }
    }, [pageData])
    
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
                    <a className={id == 1? "page-link disabled" : "page-link"} href={`/products/${parseInt(id) - 1}`}>Previous</a>
                </li>
                    {pageArray?
                    pageArray.map((pageNumber)=>
                        <li key={pageNumber} className={id == pageNumber? "page-item active" : "page-item"}><a className="page-link" href={`/products/${pageNumber}`}>{pageNumber}</a></li>
                        )
                    :
                    <></>
                    }
                <li className="page-item">
                    <a className={pageArray && id == pageArray.length? "page-link disabled" : "page-link"} href={`/products/${parseInt(id) + 1}`}>Next</a>
                </li>             
            </ul>
        </nav>
        </div>
    </div>
</section>

    )
}

export default ProductList