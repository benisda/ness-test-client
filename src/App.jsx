import './App.css';
import ContextProvider from './contexts/ContextProvider';
import Navigation from './components/Navigation';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
