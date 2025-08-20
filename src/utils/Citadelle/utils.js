import { useState } from 'react'

export function useNumbers() {
  const [X, setX] = useState([])
  const [Y, setY] = useState([])
  const [Z, setZ] = useState([])

  if (X.length > 0 && Y.length > 0 && Z.length > 0) {
  const resultado1 = (Number(X[0].number)*2 +11)
  const resultado2 = (Number(Z[0].number)*2 + Number(Y[0].number) - 5)
  const resultado3 = (Number(Y[0].number) + Number(Z[0].number) - Number(X[0].number))
  return {
    X, setX,
    Y, setY,
    Z, setZ,  
    resultado1,
    resultado2,
    resultado3,
  }  
};
  return {
    X, setX,
    Y, setY,
    Z, setZ,
  }
}

export function useSelectedStates(length) {
  const [selected, setSelected] = useState(Array(length).fill(null));
  return { selected, setSelected };
}

export const handleDrop = (index, symbolId, selected, setSelected) => {
    const newSelection = [...selected]
    newSelection[index] = symbolId
    setSelected(newSelection)
  }

export const allowDrop = (e) => {
    e.preventDefault()
  }