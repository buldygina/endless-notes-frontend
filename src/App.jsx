import {
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonRouterOutlet, IonTabs
} from "@ionic/react";
import {personOutline, reader, readerOutline} from 'ionicons/icons';
import "./App.css"
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Account from "./pages/Account.jsx";


function App() {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/" to="/notes"/>
                <Route path="/notes" render={() => <Notes/>} exact/>
                <Route path="/account" render={() => <Account/>} exact/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="notes" href="/notes">
                    <IonIcon icon={readerOutline}/>
                    <IonLabel>Notes</IonLabel>
                </IonTabButton>
                <IonTabButton tab="account" href="/account">
                    <IonIcon icon={personOutline} />
                    <IonLabel>Account</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default App
