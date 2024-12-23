import React from 'react'

export default function Tab({ label, onPress }) {
    return (
        <div onClick={onPress} style={styles.container}>
            {label}
        </div>
    )
}

const styles = {
    container: {
        width: '50%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        cursor: 'pointer'
    }
}
