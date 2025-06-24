import { BrowserRouter } from 'react-router';
import './App.css'
import Menu from './components/ui/Menu';
import './App.css'
import AppRoutes from './AppRoutes';


function App() {

  return (
    <>
      <BrowserRouter>

        <Menu/>

        <div className="containerRouter">
          <AppRoutes/>
        </div>

      </BrowserRouter>
      

    </>
  )
}

export default App
