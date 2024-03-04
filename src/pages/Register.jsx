import {IonButton, IonIcon, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import uninote from "../assets/uninote.jpg"
const Register = () => {
    return (
        <IonPage>
            <div className={"registration"}>
            <div className={"logo"}> <img src={uninote} alt=""/></div>
            <IonList>
                <IonItem>
                    <IonInput label="Username" placeholder="Enter your username"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Mail" placeholder="Enter your mail"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Password" placeholder="Enter your password"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Repeat password" placeholder="Enter your password"></IonInput>
                </IonItem>
            </IonList>
                <IonButton>Register</IonButton>
            </div>
        </IonPage>
    )
}
export default Register;