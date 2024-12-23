import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Tab from './Tab'

export default function Auth() {
    const [currentTab, setCurrentTab] = useState('login')
    return (
        <div style={styles.container}>
            <div style={styles.tabContainer}>
                {
                    ['login', 'register'].map(tab => <Tab key={tab} label={tab} onPress={() => setCurrentTab(tab)} />)
                }
            </div>
            {
                currentTab === 'login'
                    ?
                    <Login />
                    :
                    <Register />
            }
        </div>
    )
}

const styles = {
    container: {
        width: 300,
        border: '1px solid black',
    },
    tabContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        borderBottom: '1px solid black'
    }
}