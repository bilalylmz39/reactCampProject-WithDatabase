import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import ProductService from '../services/productService';
export default function ProductList() {

 const[products,setProducts] = useState([]);

 useEffect(()=>{
  let productService = new ProductService()
  productService.getProducts().then(result=>setProducts(result.data.data))
 },[])
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Unit Stock</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
{products.map((product)=>(
  <Table.Row  key={product.id}>
  <Table.Cell active>{product.productName}</Table.Cell>
  <Table.Cell>{product.unitPrice}</Table.Cell>
  <Table.Cell active>{product.unitsInStock}</Table.Cell>
  <Table.Cell>{product.quantityPerUnit}</Table.Cell>
  <Table.Cell active>{product.category.categoryId}</Table.Cell>

</Table.Row>
))}

          
        </Table.Body>
      </Table>
    </div>
  )
}
