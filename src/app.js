import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from './routes';


const route = createBrowserRouter(ROUTER)
function App() {
  return (
   <RouterProvider router = {route}/>


  );
}

export default App;