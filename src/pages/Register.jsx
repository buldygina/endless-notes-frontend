import {IonButton, IonIcon, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import uninote from "../assets/Union.svg"
import {useHistory} from "react-router-dom";
const Register = () => {
    const router = useHistory()
    const registerAccount = () => {
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
                    <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Password input" type="password" value="password"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Repeat your password" type="password" value="password"></IonInput>
                </IonItem>
            </IonList>
                <IonButton onClick={registerAccount}>Register</IonButton>
            </div>
        </IonPage>
    )
}
export default Register;