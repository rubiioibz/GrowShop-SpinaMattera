import React from 'react'
import { Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText } from 'reactstrap'
import { ItemCount } from './ItemCount'

export const Item = ({prodName, subtitle, descripcion, img, stock, initial, price}) => {

    /* const test = new Promise ((resolve, reject) => {
    const arr = [{id:234, name:'test', descripcion:'lorem'}]
    setTimeout(
      resolve(arr)
    )
  }, 3000)
  
  test.then((res) => {
    prueba.innerText(res);
  }, (err) => {
    console.error(err)
  }).catch((err) => {
    console.error(err);
  })
  
  */

  return (
      <Card body color="success" outline>
        <CardBody className='text-center'>
            <img src={img} width='100%' alt={prodName}></img>
          <CardTitle tag="h5">{prodName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {subtitle}
          </CardSubtitle>
          <CardText>{descripcion}</CardText>
          <ItemCount stock={stock} initial={initial} price={price}/>
        </CardBody>
      </Card>
  )
}
