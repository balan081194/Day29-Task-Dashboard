
import BaseLayout from './Layout/baselayout';
import React , {Suspense} from 'react'
import './App.css';
import StudentCreate from './Views/Student/StudentCreate';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import StudentList from './Views/Student/StudentList';



// Auth
 const Login = React.lazy(() => import('../src/Auth/Login'));

function App() {
  return (
   <React.Fragment>
     <Router>
       <Suspense fallback = {<div>Loading....</div>} >
        <Routes >
          <Route path="/login" name="Login Page" Component={props => <Login {...props}/>} />
            <Route path="/" name="Home" Component={props => <BaseLayout {...props}/>} />
            <Route path="/students/create" name="Create" Component={StudentCreate} />
            <Route path="/students/list" name="List" Component={StudentList} />
        </Routes>
        </Suspense>
     </Router>
   </React.Fragment>
  );
}

export default App;
