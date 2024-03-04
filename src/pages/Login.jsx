import {IonButton, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import uninote from "../assets/uninote.jpg";

const Login = () => {
    return (
        <IonPage>
            <div className={"registration"}>
                <div className={"logo"}> <img src={uninote} alt=""/></div>
                <IonList>
                    <IonItem>
                        <IonInput label="Username" placeholder="Enter your username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Password" placeholder="Enter your password"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton>Login</IonButton>
            </div>
        </IonPage>
    )
}
export default Login;