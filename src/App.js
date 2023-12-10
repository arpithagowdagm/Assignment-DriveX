import React from "react";
import ReactDOM from "react-dom/client";
import Login from './Component/Login';
import Home from './Component/Home';
import Error from "./Component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MutualFundData from './Component/MutualFundData';
 
const App = (props) => {

    return (
     <div>
        <Login />
     </div>  
    )

}

const appRouting = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        errorElement:<Error/>

    },
    {
        path:'/home',
        element:<Home/>,
        errorElement:<Error/>
    },
    {
        path:'/home/MutualFundData/:id',
        element:<MutualFundData/>,
        errorElement:<Error/>
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouting}/>
)

export default App; 