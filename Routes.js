import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./src/vues/Home";
//import Patient from "./src/vues/patient/Patient";
//import Pharma from "./src/vues/pharma/Pharma";
//import Video from "./src/vues/patient/Video";
//import Medicine from "./src/vues/patient/Medicine";
import Check from "./src/vues/patient/Check";
import Yes from "./src/vues/patient/Yes";
import No from "./src/vues/patient/No";
//import Map from "./src/vues/patient/Map";


const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="pa_check" component={Check} title="Check page" initial={true} />
            <Scene key="pa_yes" component={Yes} title = "Yes page" />
            <Scene key="pa_no" component={No} title = "No page" />
        </Scene>
    </Router>
);

/*<Scene key="pa-patient" component={Patient} title="Patient One" />
<Scene key="ph_pharma" component={Pharma} title="Pharma Two" />
<Scene key="pa_video" component={Video} title = "Video page"/>
<Scene key="pa_medicine" component={Medicine} title = "Medicine page" />
<Scene key="pa_check" component={Check} title = "Check page" />
<Scene key="pa_yes" component={Yes} title = "Yes.js page" />
<Scene key="pa_map" component={Map} title = "Map page" />*/

export default Routes;