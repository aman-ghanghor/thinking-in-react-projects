import { Route, Switch, BrowserRouter, NavLink, useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom" ;

import Courses from "./DashboardComponent/Courses" ;
import Students from "./DashboardComponent/Students" ;
import History from "./DashboardComponent/History" ;

const Dashboard = (props) => {

  const location = useLocation() ;
  const history = useHistory() ;
  const match = useRouteMatch("/dashboard") ;
  
  console.log(history) ;
  console.log(location) ;
  console.log(match) ;

  // backHandler
  const backHandler = () => {
    history.goBack() ;
  }
  // forwardHandler 
  const forwardHandler = () => {
    history.goForward() ;
  }



  return (

    <div>
      <h1>Dashboard Page</h1>
      <BrowserRouter>

        <nav className="navbar p-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dashboard/courses" className="nav-link" activeClassName="text-dark text-underline">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/students" className="nav-link" activeClassName="text-dark text-underline">Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/history" className="nav-link" activeClassName="text-dark text-underline">History</NavLink>
            </li>
          </ul>
        </nav>

        <div className="m-2 p-2">
           <button className="btn btn-primary me-2" onClick={backHandler}> Previous </button>
           <button className="btn btn-primary" onClick={forwardHandler}> Next </button>
        </div>
          
        <Switch>
          <Route exact path="/dashboard/courses">
             <Courses />
          </Route>
          <Route exact path="/dashboard/students">
             <Students />
          </Route>
          <Route exact path="/dashboard/history" component={History} />
        </Switch>
      </BrowserRouter>

    </div>



  )
}



export default Dashboard;



