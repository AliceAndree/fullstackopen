import React from 'react'
import Parts from './Parts'

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Parts key={part.id} part={part} />)}
        </div>

    )
}

export default Content