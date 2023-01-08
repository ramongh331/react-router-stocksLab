import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import data from './data'
import App from './App'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Stock from './pages/Stock'



const Router = createBrowserRouter(
    createRoutesFromElements(
    // Parent Route
    <Route path='/' element={<App />}>
        {/* Child Routes */}
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='stocks/:symbol' element={<Stock />} />
        <Route path='stocks' element={<Dashboard />} />
    </Route>
))
export default Router