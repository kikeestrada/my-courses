import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Formulario4 from "./pages/Formulario4"
import Courses from "./pages/Courses"
import Historial from "./pages/Historial"
// import Course from "./pages/Course"
// import Course2 from "./pages/Course2"
import Course3 from "./pages/Course3"
import Home from "../components/pages/Home"
import Users from "../components/pages/Users"
import MainMenu from "./organisms/MainMenu"
import '../styles/styles.scss';


//===========================================================================================
//Insertar el banner de EdTeam
const App = ()=> (

<Router>
    <MainMenu />
    <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/historial" exact component={Historial}/>
        <Route path = "/historial/:id" exact component={Historial}/>
        <Route path = "/cursos/:id" exact component={Course3}/>
        <Route path = "/cursos" exact component={Courses}/>
        <Route path = "/usuarios" exact component={Users}/>
        <Route path = "/formulario" exact component={() => <Formulario4 />}/>
        <Route component={() => (
            <div className="ed-grid">
                <h1>Página no encontrada</h1>
            </div>
        )}/>
    </Switch>
</Router>


);

export default App;
