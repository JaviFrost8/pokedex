import './App.css'
import { Battle } from './features/components/Battle';
import { ContainerComponent } from './features/components/ContainerComponent'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContainerComponent />} />
          <Route path='/battle' element={<Battle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
