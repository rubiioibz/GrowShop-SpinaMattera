import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap"

function Cart() {
  return (
    <div>
  <Card className='row m-4'>
    <CardBody>
        <img alt='' width="100px" src='https://cdn.pixabay.com/photo/2020/08/03/23/42/smoking-5461331_960_720.jpg'></img>
      <CardTitle tag="h5">
        Producto 1
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button className='bg-danger'>
        Eliminar
      </Button>
    </CardBody>
  </Card>

  <Card className='row m-4'>
    <CardBody>
    <img alt='' width="100px" src='https://cdn.pixabay.com/photo/2020/08/03/23/42/smoking-5461331_960_720.jpg'></img>
      <CardTitle tag="h5">
        Producto 2
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button className='bg-danger'>
        Eliminar
      </Button>
    </CardBody>
  </Card>
</div>
  )
}

export default Cart