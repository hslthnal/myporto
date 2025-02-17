import { useState } from 'react'
import HeaderLeft from './components/HeaderLeft'
import Experience from './components/Experience'
import Home from './components/Home'
import Project from './components/Project'
import Stack from './components/Stack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex min-h-screen w-full subpixel-antialiased'>
        <HeaderLeft />
        <main className='flex-[6]'>
          <Home />
          <Experience />
          <Project />
          <Stack />
        </main>
      </div>
    </>
  )
}

export default App
