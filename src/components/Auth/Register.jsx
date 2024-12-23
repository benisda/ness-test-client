import React, { useContext } from 'react'
import SimpleForm from './SimpleForm'
import { AppContext } from '../../contexts/ContextProvider'
import { API_URL } from '../../consts'

export default function Register() {
    const context = useContext(AppContext)
    const onPress = async values => {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data = await response.json()
        if (data.success) {
            context.setIsLogged(true)
            context.setToken(data.token)
            context.setUsername(values.username)
        } else {
            alert('Registration failed')
        }
    }
    return (
        <SimpleForm title="Register" onSubmit={onPress} />
    )
}
