import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Task1 from "../components/Task1";
import Task2 from "../components/Task2";
import Task3 from "../components/Task3";
import Task4 from "../components/Task4";
import Task5 from "../components/Task5";
import Task6 from "../components/Task6";
import Task7 from "../components/Task7";
import Task8 from "../components/Task8";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Task1></Task1>
        },
        {
            path:'task1',
            element:<Task1></Task1>
        },
        {
            path:'task2',
            element:<Task2></Task2>
        },
        {
            path:'task3',
            element:<Task3></Task3>
        },
        {
            path:'task4',
            element:<Task4></Task4>
        },
        {
            path:'task5',
            element:<Task5></Task5>
        },
        {
            path:'task6',
            element:<Task6></Task6>
        },
        {
            path:'task7',
            element:<Task7></Task7>
        },
        {
            path:'task8',
            element:<Task8></Task8>
        }
    ]
  },
]);