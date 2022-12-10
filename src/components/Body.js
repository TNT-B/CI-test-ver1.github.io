import React, { memo, useState } from 'react'

const Body = memo((props) => {
    const [text, setText] = useState('')
    const { addTodo } = props

    const onAddTodo = (event) => {
        if (event.key === 'Enter' && text) {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }

    return (
        <body className="body">
            <h1>#todo</h1>
            <input
                className="new-todo"
                placeholder="add details"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onAddTodo}
            />
        </body>
    )
})

export default Body