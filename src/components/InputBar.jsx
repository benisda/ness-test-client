import React, { useState } from 'react'

export default function InputBar({ onSubmit }) {
    const [text, setText] = useState('');
    return (
        <div style={styles.container}>
            <input
                style={styles.input}
                placeholder='Type something'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button style={styles.button} onClick={() => onSubmit(text)}>Submit</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#eee',
    },
    input: {
        width: '80%',
        height: 40,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        border: 'none'
    },
    button: {
        width: '10%',
        height: 40,
        margin: 5,
        borderRadius: 5,
        border: 'none',
        backgroundColor: '#ddd',
        cursor: 'pointer',
    }
}
