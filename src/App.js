import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from "./routes/ROUTES.js"

const App = () => {

  const routes = createBrowserRouter(ROUTES)

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
