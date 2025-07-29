import { useState } from 'react'

export function useNumbers() {
  const [X, setX] = useState('')
  const [Y, setY] = useState('')
  const [Z, setZ] = useState('')

  const resultado1 = (Number(X)*2 +11)
  const resultado2 = (Number(Z)*2 + Number(Y) - 5)
  const resultado3 = (Number(Y) + Number(Z) - Number(X))

  console.log("Resultados calculados:", resultado1, resultado2, resultado3) // Log para depuración
  return {
    X, setX,
    Y, setY,
    Z, setZ,
    resultado1,
    resultado2,
    resultado3,
  }
}