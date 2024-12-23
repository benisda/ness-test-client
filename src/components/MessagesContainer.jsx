import React, { useContext } from 'react'
import Message from './Message'
import { AppContext } from '../contexts/ContextProvider'

export default function MessagesContainer({ history }) {
    const context = useContext(AppContext);
    console.log(context)
    return (
        <div style={styles.container}>
            {history.map((message, index) => (
                <Message key={index} message={message.message} author={message.username} isMine={message.username === context.username} />
            ))}
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'scroll-y',
        height: 600,
        padding: 20,
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