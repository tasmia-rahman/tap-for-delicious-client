import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/routes';

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
