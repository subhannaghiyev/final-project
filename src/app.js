import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from './routes';


const route = createBrowserRouter(ROUTER)
function App() {
  return (
    <>
   <RouterProvider router = {route}/>
   <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>

   
  );
}

export default App;