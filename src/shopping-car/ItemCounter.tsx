interface ItemCounterProps {
  name: string
  quantity?: number
}

export const ItemCounter = ({name, quantity}: ItemCounterProps) => {
  return (
    <section style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      marginTop: '10px',
    }}>
      <span style={{width: 150}}>{name}</span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  )
}
