import React, { useContext, useEffect, useState } from 'react'
import socketIO from 'socket.io-client';
import InputBar from './InputBar';
import MessagesContainer from './MessagesContainer';
import { AppContext } from '../contexts/ContextProvider';
const socket = socketIO.connect('http://localhost:3031');
export default function Chat({ }) {
    const context = useContext(AppContext);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.emit('join', { token: '123' });
        socket.on('history', ({ messages }) => {
            console.log('history received', messages)
            setMessages(messages);
        });
        socket.on('newMessage', message => {
            console.log('new msgs')
            setMessages(messages => [...messages, message]);
        });
        return () => {
            socket.disconnect();
        }
    }, [])

    const submitMessage = (text) => {
        socket.emit('newMessage', { user: context.token, message: text });
    }

    return (
        <div style={styles.container}>
            <div style={styles.chatWindow}>
                <MessagesContainer history={messages} />
                <InputBar onSubmit={submitMessage} />
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ccc',
    },
    chatWindow: {
        width: '80%',
        height: 700,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'auto'
    }
}
