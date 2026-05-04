import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import  Navbar  from './components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Home /> 
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
