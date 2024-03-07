import {IonButton, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import uninote from "../assets/Union.svg";
import {useHistory} from "react-router-dom";

const Code = () => {
    const router = useHistory()
    const codeAccount = () => {
        router.replace('/')
    }
    return (
        <IonPage>
            <div className={"registration"}>
                <div className={"logo"}><img src={uninote} alt=""/></div>
                <IonList>
                    <IonItem>
                        <IonInput label="Code" placeholder="Enter code"></IonInput>
                    </IonItem>
                </IonList>
                 <IonButton onClick={codeAccount}>Send code again</IonButton>
            </div>
        </IonPage>
)
}
export default Code;