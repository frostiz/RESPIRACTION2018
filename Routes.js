import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./src/vues/Home";
import One from "./src/vues/One";
import Two from "./src/vues/Two";



const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home page" initial={true} />
            <Scene key="page1" component={One} title="Page One" />
            <Scene key="page2" component={Two} title="Page Two" />
        </Scene>
    </Router>
);
export default Routes;