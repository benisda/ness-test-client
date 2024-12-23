import React, { useContext } from 'react'
import SimpleForm from './SimpleForm'
import { API_URL } from '../../consts'
import { AppContext } from '../../contexts/ContextProvider'

export default function Login() {
    const context = useContext(AppContext)
    const onPress = async values => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data = await response.json()
        if (data.success === true) {
            context.setIsLogged(true)
            context.setToken(data.token)
            context.setUsername(values.username)
        } else {
            alert('Login failed')
        }
    }
    return (
        <SimpleForm title="Login" onSubmit={onPress} />
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
        cursor: 'pointer'
    }
}