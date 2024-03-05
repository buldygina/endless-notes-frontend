import {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonPage,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {arrowBackOutline, enterOutline} from "ionicons/icons";
import person from "../assets/person-circle-sharp .png"
const Account = () => {
    return (
        <IonPage>
            <IonContent>
                <div className={"headerAcc"}>
            <IonButton fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={arrowBackOutline}></IonIcon></IonButton>
            <div className={"account"}><img src={person} alt=""/></div>
            <IonButton fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={enterOutline}></IonIcon></IonButton>
                </div>
                <div className={"accountLog"}>
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
                </IonList>
                </div>
                <div className={"theme"}>
                <IonList>
                    <IonItem>
                        <IonSelect aria-label="Light/Dark theme" interface="popover" placeholder="Select theme">
                            <IonSelectOption value="light">Light theme </IonSelectOption>
                            <IonSelectOption value="dark">Dark theme</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Account;
