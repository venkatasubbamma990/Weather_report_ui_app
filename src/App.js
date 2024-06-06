import { BrowserRouter, Routes , Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import RootLayout from './Components/RootLayout';
import NotFound from './Components/NotFound';
import TempCalendar from './Components/DatePicker';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>} />
       <Route path="/Calender" element={<TempCalendar/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  ))
  return (
    <RouterProvider router={router}/>

    
  );
}

export default App;
