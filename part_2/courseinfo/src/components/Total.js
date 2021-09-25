import React from 'react'

const Total = ({ parts }) => {
    const arr = parts.map((parts) => parts.exercises)
    const total = arr.reduce(
        (previousSum, currentSum) => previousSum + currentSum)

    console.log(total)
    return (
        <div>
            <b>Total of {total} exercices</b>
        </div>
    )
}

export default Total