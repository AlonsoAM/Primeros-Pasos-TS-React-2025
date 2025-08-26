import {useState} from "react";
import './ItemCounter.css'

interface ItemCounterProps {
  name: string
  quantity?: number
}

export const ItemCounter = ({name, quantity}: ItemCounterProps) => {

  const [count, setCount] = useState(quantity ?? 1)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleRemove = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  return (
    <section className={'item-row'}>
      <span className={'item-text'} style={{color: count === 1 ? 'red' : 'darkgreen'}}>{name}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleRemove}>-1</button>
    </section>
  )
}
