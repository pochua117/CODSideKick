import { useState } from 'react'

export function useNumbers() {
  const [X, setX] = useState('')
  const [Y, setY] = useState('')
  const [Z, setZ] = useState('')

  const resultado1 = (Number(X)*2 +11)
  const resultado2 = (Number(Z)*2 + Number(Y) - 5)
  const resultado3 = (Number(Y) + Number(Z) - Number(X))

  return {
    X, setX,
    Y, setY,
    Z, setZ,
    resultado1,
    resultado2,
    resultado3,
  }
}

export function selectedStates() {
  const [selected, setSelected] = useState(Array(6).fill(null)) // 6 espacios vacíos
  return {selected, setSelected}
}

export const handleDrop = (index, symbolId, selected, setSelected) => {
    const newSelection = [...selected]
    console.log(symbolId)
    newSelection[index] = symbolId
    setSelected(newSelection)
  }

export const allowDrop = (e) => {
    e.preventDefault()
  }