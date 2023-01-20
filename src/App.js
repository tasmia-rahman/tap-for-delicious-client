import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/routes';

function App() {

  return (
    <>
<<<<<<< HEAD
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster />
=======
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
>>>>>>> 96f683f0ba69ca965e06249cd9e379c7438ea591
    </>
  );
}

export default App;
