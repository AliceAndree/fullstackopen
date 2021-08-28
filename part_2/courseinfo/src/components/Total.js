import React from 'react'

const Total = ({ course }) => {
    return (
        <div>
            <b>Total of {course.parts.reduce(
                (previousSum, currentSum) => previousSum + currentSum.exercises,
                0
            )} exercises</b>
        </div>
    )
}

export default Total