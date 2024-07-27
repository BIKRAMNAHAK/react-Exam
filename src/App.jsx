import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import PostForm from './components/postForm/PostForm'



function App() {
  

  return (
    <>
     <Header />
     <PostForm />
     {/* <Routes>
        <Route path="/postform" element={<PostForm />} />
     </Routes> */}
    </>
  )
}

export default App
