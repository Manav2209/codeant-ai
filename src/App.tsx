import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Signin from "./pages/Signin.tsx";

function App() {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#ffffff]`}>
         <Routes>
             <Route path={'/'} Component={Signin} />
             <Route path={'/dashboard'} Component={Home} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App