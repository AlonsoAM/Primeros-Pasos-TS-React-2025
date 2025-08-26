import {useState} from "react";

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
    <section style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      marginTop: '10px',
    }}>
      <span style={{width: 150}}>{name}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleRemove}>-1</button>
    </section>
  )
}
