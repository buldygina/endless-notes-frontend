import {IonButton, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import uninote from "../assets/Union.svg";
import {useHistory} from "react-router-dom";

const Login = () => {
    const router = useHistory()
    const loginAccount = () => {
        router.replace('/')
    }
    return (
        <IonPage>
            <div className={"registration"}>
                <div className={"logo"}> <img src={uninote} alt=""/></div>
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