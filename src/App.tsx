import './App.css'
import Display from './components/Display';
import Updater from './components/Updater';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      
        <h1>
          App Context: <Display/>
        </h1>
        <div>
          Update Context: <Updater/>
        </div>
      
    </AppProvider>
  )
}

export default App;
