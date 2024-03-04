import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CookiesProvider} from "react-cookie";
import {IonApp, IonRouterOutlet, setupIonicReact} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {Route} from "react-router-dom";

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Note from "./pages/Note.jsx";

setupIonicReact()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CookiesProvider>
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path={"/"} component={App}/>
                        <Route path={"/register"} component={Register}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/note"} component={Note}/>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        </CookiesProvider>
    </React.StrictMode>,
)
