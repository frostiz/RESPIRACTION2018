import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/vues/Home';
import PatientHome from './src/vues/patient/Video';
import PatientScan from './src/vues/patient/Scan';
import PatientForm from './src/vues/patient/Form';
import PharmaHome from './src/vues/pharma/Home';
import Check from "./src/vues/patient/Check";
import Yes from "./src/vues/patient/Yes";
import No from "./src/vues/patient/No";
import Map from "./src/vues/patient/Map";

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home page" hideNavBar={true} initial={true} />
            <Scene key="pa_check" component={Check} title="Check page" />
            <Scene key="pa_yes" component={Yes} title = "Yes page" hideNavBar={true} />
            <Scene key="pa_no" component={No} title = "No page" hideNavBar={true} />
            <Scene key="pa_home" component={PatientHome} title="Patient home page" hideNavBar={true} />
            <Scene key="pa_scan" component={PatientScan} title="Patient scan medics page" hideNavBar={false} />
            <Scene key="pa_form" component={PatientForm} title="Patient form" hideNavBar={false} />
            <Scene key="ph_home" component={PharmaHome} title="Pharma home page" hideNavBar={false} />
            <Scene key="pa_map" component={Map} title = "Map page"/>
        </Scene>
    </Router>
);

export default Routes;