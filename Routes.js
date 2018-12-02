import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/vues/Home';
import PatientHome from './src/vues/patient/Home';
import PatientScan from './src/vues/patient/Scan';
import PatientForm from './src/vues/patient/Form';
import PatientPrepare from './src/vues/patient/Prepare';
import PatientQuestions from './src/vues/patient/Questions';
import PatientEnd from './src/vues/patient/End';
import PharmaHome from './src/vues/pharma/Home';
import Check from "./src/vues/patient/Check";
import Yes from "./src/vues/patient/Yes";
import No from "./src/vues/patient/No";
import Map from "./src/vues/patient/Map";

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" hideNavBar={true} initial={true} />
            <Scene key="pa_check" component={Check} title="Traitement" hideNavBar={true}/>
            <Scene key="pa_yes" component={Yes} title = "Êtes vous éligible ?" hideNavBar={true}/>
            <Scene key="pa_no" component={No} title = "No page"/>
            <Scene key="pa_home" component={PatientHome} title="Patient home page" hideNavBar={true} />
            <Scene key="pa_scan" component={PatientScan} title="Mon traitement" hideNavBar={true}/>
            <Scene key="pa_form" component={PatientForm} title="Confirmation" hideNavBar={true}/>
            <Scene key="pa_prepare" component={PatientPrepare} title={"Préparation"} hideNavBar={true}/>
            <Scene key="pa_questions" component={PatientQuestions} title={"Questionnaire"} hideNavBar={true}/>
            <Scene key="pa_end" component={PatientEnd} title={"Merci !"} hideNavBar={true}/>
            <Scene key="ph_home" component={PharmaHome} title="Pharma home page"/>
            <Scene key="pa_map" component={Map} title = "Autour de moi" hideNavBar={true}/>
        </Scene>
    </Router>
);

export default Routes;