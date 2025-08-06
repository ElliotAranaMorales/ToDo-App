//import uuid from "react-uuid";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import NotFoundPage from "./pages/NotFoundPage";
import HelpPage from "./pages/HelpPage";
import HelpAdd from "./pages/HelpPage/HelpAdd/HelpAdd";
import HelpChange from "./pages/HelpPage/HelpChange/HelpChange";
import HelpRemove from "./pages/HelpPage/HelpRemove/HelpRemove";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
//import { load, save, update } from './database/index';
import * as database from './database';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    
    /* const result = database.load();
    console.log('Loaded data: ', result); */

    database.load()
      .then((result)=> {
        console.log('Load Result: ', result);
        setTasks(result);
        setIsLoading(false);
      })
      .catch((error)=>{
        console.log('Load Error: ', error);
      });
    
/* 
      //IIFE - immmediatly invoked function expression
      (async () => {
        const data = await database.load();
        console.log('Loaded data:',data);
      })();
*/
/* 
      database.loadOpen()
      .then((result)=> {
        console.log('Loaded Open tasks: ', result);
      })
      .catch((error)=>{
        console.log('Load Error: ', error);
      }); */

  }, []);

  // Sets the initial state.
  const [tasks, setTasks] = useState([]);

  // Removes all tasks form the list.
  const handleClearTasks = () => {
    setTasks([]);
  }

  // Toggles a task status.
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  }

  // Removes a task from the list.
  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  }

  // Adds a task.
  const handleAddTask = (savedID) => {
    setTasks([
      ...tasks,
      {
        id: savedID.id,
        description: savedID.description,
        done: savedID.status === 'completed'
      }
    ]);
    //database.save(description, status);
  }
  
  return (
    <>
      <Header />

      {isLoading 
        ? <Loading />
        : (
        <main className="page">
          <Routes>
            <Route path="/" element={
                <Tasks              
                  tasks={tasks}
                  onStatusChange={handleStatusChange}
                  onTaskRemove={handleTaskRemove}
                  onClearTasks={handleClearTasks}
                />} 
            />
            <Route path="/add" element={
                <Form 
                  onAddTask={handleAddTask}
                />} 
            />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/help" element={<HelpPage /> }>
                <Route path="intro" element={<HelpPage />}/>
                <Route path="add" element={<HelpAdd />}/>
                <Route path="remove" element={<HelpRemove />}/>
                <Route path="change" element={<HelpChange />}/>
            </Route>
          </Routes>
        </main>
        )}
      
   
    </>
  );
}

export default App;
