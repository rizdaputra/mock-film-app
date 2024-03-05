import './App.css';
import AppRoutes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App'>
        <header className="App-header">
          <h1>Netflix Mock</h1>
        </header>
        <AppRoutes />
        
      </div>
    </Router>
  );
}

export default App;
