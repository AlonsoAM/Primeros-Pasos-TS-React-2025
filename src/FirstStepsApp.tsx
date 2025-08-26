// import {MyAwesomeApp} from "./MyAwesomeApp.tsx";
import {ItemCounter} from "./shopping-car/ItemCounter.tsx";

export const FirstStepsApp = () => {
  return (
    <>
      {/* <MyAwesomeApp/>*/}
      <h1>Carrito de Compras</h1>
      <ItemCounter name={'Nintendo Switch'} quantity={2}/>
      <ItemCounter name={'Playstation 5'} quantity={1}/>
      <ItemCounter name={'Xbox Series X'} quantity={3}/>
    </>

  )
}
