import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Formulario4 from "./Formulario4"
import GridCourse from "./GridCourse"
// import Course from "./Course"
import Historial from "./Historial"
import CourseMatch from "./CourseMatch"
import Banner from "./Banner"
import MainMenu from "./MainMenu"
import './styles/styles.scss';



//===========================================================================================
//Insertar el banner de EdTeam
const App = ()=> (

<Router>
    <MainMenu />
    <Switch>
        <Route path = "/" exact component={Banner}/>
        {/*<Route path = "/cursos/:id" exact component={Course}/>*/}
        <Route path = "/historial" exact component={Historial}/>
        <Route path = "/historial/:id" exact component={Historial}/>
        <Route path = "/cursos/:id" exact component={CourseMatch}/>
        <Route path = "/cursos" exact component={GridCourse}/>
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
