import React from 'react'

export default function Message({ message, author, isMine }) {
    return (
        <div style={{ ...styles.message, backgroundColor: isMine ? 'lightgreen' : '#eee', alignSelf: isMine ? 'flex-end' : 'flex-start' }}>
            <b>{author}</b>: {message}
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        padding: 10,
        overflow: 'auto'
    },
    message: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: '80%',
        wordWrap: 'break-word'
    }
}