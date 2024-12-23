import React, { useState } from 'react'

export default function SimpleForm({ onSubmit, title }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div style={styles.container}>
            <h1>{title}</h1>
            <input
                style={styles.input}
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                style={styles.input}
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={() => onSubmit({
                username,
                password
            })}>Submit</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ccc'
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
        width: '80%',
        height: 40,
        margin: 5,
        borderRadius: 5,
        border: 'none',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
    }
}