import React, { useEffect, useState } from 'react'
import Singleproducts from './Singleproducts'
import axios from 'axios'
const Products = () => {
    const[heading,setHeading] = useState()
    const [myProduct, setMyProduct] = useState()
    const [load, setLoad] = useState(true)
    const [cat, setCat] = useState([])
    const[currCat,setCurrCat] = useState("")


    async function fetchproducts(cat) {
        setCurrCat(cat)
        let response = await axios.get(`https://dummyjson.com/products/category/${cat}`);
        setLoad(false)
        setMyProduct(response.data.products)
        console.log(response.data.products)


    }
    console.log(currCat)
    async function getCategories() {
        let response = await axios.get('https://dummyjson.com/products/categories')
        setCat(response.data)
        
    }

    useEffect(() => {
        //    fetchproducts()
        getCategories()
    }, [])

    return (
        <>{ 
            <h2>{heading}</h2>
        }{cat.map((ele, index) => {
            // setHeading(ele)
            return <button class ={`${currCat == ele ? "btnactive" : ""}`} key={index} onClick={() => fetchproducts(ele)}>{ele}</button> 
        })}{
                load ?
                    <h3>your products are Loading.....</h3>
                    :
                    myProduct.map(ele => {

                        return <Singleproducts key={ele.id} product={ele} />
                    })}
        </>
    )
}

export default Products