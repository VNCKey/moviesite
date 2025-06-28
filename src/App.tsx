import { BrowserRouter } from 'react-router';
import Menu from './components/ui/Menu';
import './styles/App.css'
import AppRoutes from './routes/AppRoutes';


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
