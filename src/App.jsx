
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>

        <Link to="/">Home</Link> 

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
