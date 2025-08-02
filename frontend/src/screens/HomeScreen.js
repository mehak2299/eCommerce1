import{Row,Col} from'react-bootstrap'
import { useEffect,useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';
export default function HomeScreen() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
   const fetchProducts=async()=>{
     try{const {data}=await axios.get('/api/products')
     
     setProducts(data)
   }
   catch(err)
   {
    console.log(err)
   }
   }
   fetchProducts()
  },[])

    return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
           <Product product={product}/>
          </Col>
        ))}
    </Row>
    </>
  )
}
