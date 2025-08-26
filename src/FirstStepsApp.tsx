// import {MyAwesomeApp} from "./MyAwesomeApp.tsx";
import {ItemCounter} from "./shopping-cart/ItemCounter.tsx";

interface ItemInCart {
  productName: string
  quantity: number
}

const itemsInCart: ItemInCart[] = [
  {productName: 'Nintendo Switch', quantity: 2},
  {productName: 'Playstation 5', quantity: 1},
  {productName: 'Xbox Series X', quantity: 3},
  {productName: 'PC Gaming', quantity: 1},
]

export const FirstStepsApp = () => {
  return (
    <>
      {/* <MyAwesomeApp/>*/}
      <h1>Carrito de Compras</h1>
      {itemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} name={productName} quantity={quantity}/>
      ))}
    </>

  )
}
