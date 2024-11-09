import './App.css'
import { Battle } from '../src/features/components/containers/Battle';
import { ContainerComponent } from './features/components/containers/ContainerComponent'
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
