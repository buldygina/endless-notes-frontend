import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { personOutline, readerOutline } from 'ionicons/icons';
import "./App.css"
import { Redirect, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Account from "./pages/Account.jsx";


function App() {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/notes"/>
                <Route path="/tabs/notes" render={() => <Notes/>} exact/>
                <Route path="/tabs/account" render={() => <Account/>} exact/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="notes" href="/tabs/notes">
                    <IonIcon icon={readerOutline}/>
                    <IonLabel>Заметки</IonLabel>
                </IonTabButton>
                <IonTabButton tab="account" href="/tabs/account">
                    <IonIcon icon={personOutline} />
                    <IonLabel>Аккаунт</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default App
