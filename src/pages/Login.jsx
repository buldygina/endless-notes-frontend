import {IonButton, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import Uninote from "../assets/Union.svg?react";
import {useHistory} from "react-router-dom";

const Login = () => {
    const router = useHistory()
    const loginAccount = () => {
        router.replace('/')
    }
    return (
        <IonPage>
            <div className={"registration"}>
                <div className={"logo"}><Uninote/></div>
                <IonList>
                    <IonItem>
                        <IonInput label="Username" placeholder="Enter your username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Password input" type="password" value="password"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={loginAccount}>Login</IonButton>
            </div>
        </IonPage>
    )
}
export default Login;