import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount]= useState(1)
  return (
    <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
    </div>
  )
}

export default ItemCount