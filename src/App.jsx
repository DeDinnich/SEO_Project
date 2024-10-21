import {Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";

export default function App(){
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense
            fallback={<p>Loading...</p>}>
            <Home/>
          </Suspense>
        }
      />
    </Routes>
  )
}
