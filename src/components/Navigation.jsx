import { useContext } from 'react';
import Auth from './Auth/Auth';
import Chat from './Chat';
import { AppContext } from '../contexts/ContextProvider';

export default function Navigation() {
    const context = useContext(AppContext)
    return (
        <div style={styles.container}>
            {
                context.isLogged
                    ?
                    <Chat />
                    :
                    <Auth />
            }
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }
}