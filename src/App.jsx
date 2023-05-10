import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Community from './pages/community/Community'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path ='discord' element = {<Community/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App