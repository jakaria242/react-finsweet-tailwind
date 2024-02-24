import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/home/Home";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route element={<Rootlayout/>}>
    <Route path="/" element={<Home/>}/>
    </Route>
    </>
  
    )
  );


  return (
    <>
     <RouterProvider
    router={router}
  />
    </>
  )
}

export default App
